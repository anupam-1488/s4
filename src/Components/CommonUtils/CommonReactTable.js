
import React, { useRef, useState } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from "react-table";
import { SiMicrosoftexcel } from 'react-icons/si';
import { BsPrinter } from 'react-icons/bs';
import { useReactToPrint } from 'react-to-print';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function CommonReactTable(props) {
    const { columns, data, filename, showFooter, pagination, search, excelshow, downloadExcelD } = props;
    console.log("excelshow", excelshow)
    const {
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        canPreviousPage,
        canNextPage,
        preGlobalFilteredRows,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex, pageSize },
        setPageSize,
        globalFilter,
        setGlobalFilter,
        rows,
        prepareRow
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 30 },
    },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
        ,
    );
    let navigate = useNavigate()
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(valuess => {
        setGlobalFilter(valuess)
    }, 200)
    let componentRef = useRef();
    const handleprint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "college-data",
    });

    const [currentPage, setCurrentPage] = useState(1);
    function rowsCount(a) {
        const currentPageRows = rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
        const countSum = currentPageRows.reduce((sum, row) => sum + row.values[a.Footer], 0);
        if (isNaN(countSum) === false) {
            return countSum
        }
        else {
            return ""
        }
    }
    function lakhCount(a) {
        const currentPageRows = rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
        const countSum = currentPageRows.reduce((sum, row) => parseInt(sum) + parseInt(row.values[a.Footer]), 0);
        const amountInLakhs = countSum / 100000;
        if (isNaN(countSum) === false) {
            return amountInLakhs.toFixed(2)
        }
        else {
            return ""
        }
    }


    return (
        <React.Fragment>
            {search === "false" ? "" : <>
                <span>
                    <input
                        value={value || ""}
                        name={`search_${Date.now()}`}
                        onChange={e => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                        placeholder="Search"
                        style={{
                            fontSize: '1.1rem',
                            border: '1',
                        }}
                    />
                </span>
                &emsp;
                {typeof excelshow === "undefined" ? null :
                    excelshow === "excelshow" ? (
                        <ReactHtmlTableToExcel
                            id="test-table-xls-button"
                            className="pull-right btn btn-sm btn-success"
                            table="table-to-xls"
                            filename={filename}
                            sheet="tablexls"
                            buttonText={<SiMicrosoftexcel size={20} title="Excel" />}
                        />
                    ) : excelshow === "excelshowwithfunction" ? (
                        <ReactHtmlTableToExcel
                            id="test-table-xls-button"
                            onClick={downloadExcelD}
                            className="pull-right btn btn-sm btn-success"
                            table="table-to-xls"
                            filename={filename}
                            sheet="tablexls"
                            buttonText={<SiMicrosoftexcel size={20} title="Excel" />}
                        />
                    ) : null
                }
                &nbsp;
                <BsPrinter onClick={handleprint} title="Print" className=" btn btn-primary btn-sm"
                    style={{ fontSize: '32px' }} />
            </>}
            <div className='table-responsive'>
                <table className="table table-condensed table-bordered table-striped table-responsive mb-0 mt-2" id='table-to-xls'
                    style={{ border: '1px solid lightblue', borderCollapse: 'collapse', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    ref={componentRef}>
                    <thead >
                        {headerGroups.map((headerGroup, index) => (
                            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, i) => (

                                    <th className={column.inPrint === false ? 'print-only-header' : ''} key={i} {...column.getHeaderProps(column.getSortByToggleProps())} >
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} style={{ fontSize: "12px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {page.map((row, index) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={index}>
                                    {row.cells.map((cell, index) => {
                                        // console.log("{row.cells",row.cells[5].column?.HeaderColor)
                                        return <td className={cell.column.inPrint === false ? 'print-only-header' : ''} key={index} {...cell.getCellProps()} style={{ overflowWrap: "break-word", whiteSpace: 'normal', backgroundColor: row.cells[index].column?.HeaderColor ? row.cells[index].column?.HeaderColor : "", color: "black", textAlign: row.cells[index].column?.TextAlign }} >{cell.render("Cell")} </td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                    {showFooter === "true" ? <tfoot>

                        <tr>
                            {footerGroups[0].headers.map((column, cindex) => (
                                <td key={cindex} {...column.getFooterProps()} className={column.inPrint === false ? 'print-only-header' : ''}
                                    style={{ backgroundColor: '#f5f5f5', color: 'red', fontWeight: 'bold', textAlign: "right" }}
                                >
                                    {column.Footer === 'Total' ? (
                                        <b>{column.render('Footer')}</b>
                                    ) : column.Footer === column.Header && column.fclickable === true ? (
                                        <span
                                            style={{ color: "Highlight", textDecoration: "underline" }}
                                            onClick={() => {
                                                if (column.fclickable === true) {
                                                    navigate(column.path, { state: { path: column?.path } })
                                                }
                                            }}
                                        >
                                            {rowsCount(column)}
                                        </span>
                                    ) : column.inlakh ? (<b>
                                        {lakhCount(column)}
                                    </b>) :
                                        (
                                            <b>{rowsCount(column)}</b>
                                        )}
                                </td>
                            ))}
                        </tr>


                    </tfoot> : null}

                </table>
            </div>
            {
                pagination === "false" ? "" :

                    <div className="pagination mt-2">
                        <button type='button' onClick={() => gotoPage(0)} disabled={!canPreviousPage}><CgPushChevronLeft size={21} /></button>&emsp;
                        <button type='button' onClick={() => previousPage()} disabled={!canPreviousPage}><FaChevronLeft /></button>&emsp;
                        <button type='button' onClick={() => nextPage()} disabled={!canNextPage}><FaChevronRight /></button>&emsp;
                        <button type='button' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><CgPushChevronRight size={21} /></button>&emsp;
                        <button type='button' className='mt-1'>&emsp;{currentPage} - <strong>{pageSize}</strong> of <strong>{preGlobalFilteredRows.length} </strong>  &emsp;</button>
                        &nbsp;<b style={{ marginTop: '6px' }}>Rows per page : </b>&nbsp;
                        <select value={pageSize} onChange={e => {
                            setPageSize(Number(e.target.value)); setCurrentPage(1);
                        }}>
                            <option value={rows.length}>All</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>

                        </select>

                    </div>}
        </React.Fragment>
    );
}
