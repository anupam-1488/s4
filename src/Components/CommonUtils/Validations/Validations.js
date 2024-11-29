import * as Yup from "yup";
import { AADHAR_VALIDATION, ALPHABETS_ONLY, ALPHABETS_ONLY_Msg, Aadhaar_Msg, ERROR_MSG, MOBILE_VALIDATION, Mobile_Msg, NUMERIC_Msg, ONLY_NUMERIC } from "./RegularExpAndVar";


export const loginValidations =
  Yup.object().shape({
    userId: Yup.string().required(ERROR_MSG),
    userPassword: Yup.string().required(ERROR_MSG),
  })
export const empFormValidations =
  Yup.object().shape({
    mobileNo: Yup.string().required(ERROR_MSG),
    dob: Yup.string().required(ERROR_MSG),
    adNo: Yup.string().required(ERROR_MSG),
  })
export const WorkerRegValidations =
  Yup.object().shape({
    aadhaarNo: Yup.string().required(ERROR_MSG).matches(AADHAR_VALIDATION, Aadhaar_Msg),
    empName: Yup.string().required(ERROR_MSG).matches(ALPHABETS_ONLY, ALPHABETS_ONLY_Msg),
    caste: Yup.string().required(ERROR_MSG),
    subCaste: Yup.string().required(ERROR_MSG),
    religion: Yup.string().required(ERROR_MSG),
    dob: Yup.string().required(ERROR_MSG),
    lastName: Yup.string().required(ERROR_MSG).matches(ALPHABETS_ONLY, ALPHABETS_ONLY_Msg),
    firstName: Yup.string().required(ERROR_MSG).matches(ALPHABETS_ONLY, ALPHABETS_ONLY_Msg),
    gender: Yup.string().required(ERROR_MSG),
    maritalStatus: Yup.string().required(ERROR_MSG),
    phoneNo: Yup.string().required(ERROR_MSG).matches(MOBILE_VALIDATION, Mobile_Msg),
    fatherName: Yup.string().required(ERROR_MSG).matches(ALPHABETS_ONLY, ALPHABETS_ONLY_Msg),
    ifscCode: Yup.string().required(ERROR_MSG),
    nameInBank: Yup.string().required(ERROR_MSG),
    bankAccountNo: Yup.string().required(ERROR_MSG),
    rbankAccountNo: Yup.string().required(" Please Enter Bank Account No").oneOf([Yup.ref("bankAccountNo"), null], "Account Number doesn't match."),
    bankPhoto: Yup.string().required(ERROR_MSG),
    presentDistrictCode: Yup.string().required(ERROR_MSG),
    presentMadalCode: Yup.string().required(ERROR_MSG),
    presentVillageCode: Yup.string().required(ERROR_MSG),
    presentPincode: Yup.string().required(ERROR_MSG),
    presentDoorNo: Yup.string().required(ERROR_MSG),
    presentAddress: Yup.string().required(ERROR_MSG),
    isPermanent: Yup.string().required(ERROR_MSG),
    permanentDistrictCode: Yup.string().when("isPermanent", {
      is: (isPermanent) => (isPermanent === "N" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),
    permanentMadalCode: Yup.string().when("isPermanent", {
      is: (isPermanent) => (isPermanent === "N" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),
    permanentVillageCode: Yup.string().when("isPermanent", {
      is: (isPermanent) => (isPermanent === "N" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),
    permanentPincode: Yup.string().when("isPermanent", {
      is: (isPermanent) => (isPermanent === "N" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),
    permanentDoorNo: Yup.string().when("isPermanent", {
      is: (isPermanent) => (isPermanent === "N" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),
    permanentAddress: Yup.string().when("isPermanent", {
      is: (isPermanent) => (isPermanent === "N" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),

    isUnionMember: Yup.string().required(ERROR_MSG),
    unionName: Yup.string().when("isUnionMember", {
      is: (isPermanent) => (isPermanent === "Y" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),
    regNo: Yup.string().when("isUnionMember", {
      is: (isPermanent) => (isPermanent === "Y" ? true : false),
      then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    }),

    presentOfficeName: Yup.string().required(ERROR_MSG),
    typeOfWork: Yup.string().required(ERROR_MSG),
    workCapability: Yup.string().required(ERROR_MSG),
    officeDistrictCode: Yup.string().required(ERROR_MSG),
    officeMadalCode: Yup.string().required(ERROR_MSG),
    officeVillageCode: Yup.string().required(ERROR_MSG),
    officePincode: Yup.string().required(ERROR_MSG),
    officeDoorNo: Yup.string().required(ERROR_MSG),
    officeAddress: Yup.string().required(ERROR_MSG),
    photo: Yup.string().required(ERROR_MSG),
    selfAffidavit: Yup.string().required(ERROR_MSG),
    aadhaarPhoto: Yup.string().required(ERROR_MSG),
    familydetails: Yup.array().of(Yup.object().shape({
    relation: Yup.string().required(ERROR_MSG),
    memberName: Yup.string().required(ERROR_MSG).matches(ALPHABETS_ONLY, ALPHABETS_ONLY_Msg),
    memberDob: Yup.date().required(ERROR_MSG),
    memberUid: Yup.string().required(ERROR_MSG).matches(AADHAR_VALIDATION, Aadhaar_Msg),
    isNomine: Yup.string().required(ERROR_MSG),
    nominePer: Yup.string().when("isNomine", {
        is: (isNomine) => (isNomine === "Y" ? true : false),
        then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
      }),          
    })),
    // familydetails: Yup.array()
    // .test('sumOfNominePer', '% of Benefits in Family must be equal to 100',(value) => {
    //     if(value.filter((val => val.isNomine === "Y"))){
    //         console.log("BENEFITS",value.filter((val => val.isNomine === "Y")))
    //         const sumOfNominePer = value?.reduce((sum, item) => sum + parseInt(item?.nominePer), 0);
    //         //sumOfNominePer && sumOfNominePer === 100
    //         return true  ;
    //     }
    //     else{
    //         return false ;
    //     }
    //     })
    // .of(Yup.object().shape({
    // relation: Yup.string().required(ERROR_MSG),
    // memberName: Yup.string().required(ERROR_MSG).matches(ALPHABETS_ONLY, ALPHABETS_ONLY_Msg),
    // memberDob: Yup.date().required(ERROR_MSG),
    // memberUid: Yup.string().required(ERROR_MSG).matches(AADHAR_VALIDATION, Aadhaar_Msg),
    // isNomine: Yup.string().required(ERROR_MSG),
    // nominePer: Yup.string().when("isNomine", {
    //     is: (isNomine) => (isNomine === "Y" ? true : false),
    //     then: Yup.string().required(ERROR_MSG), oterwise: Yup.string(),
    //   }),          
    // })),
    // familydetails: Yup.array().of(Yup.object().shape({
    //   relation: Yup.string().required(ERROR_MSG),
    //   memberName: Yup.string().required(ERROR_MSG),
    // })),
  })
export const InWardChequeValidation =
  Yup.object().shape({
    in_ward_cheque_in_date: Yup.date().required(ERROR_MSG),
    organisation_name: Yup.string().required(ERROR_MSG),
    lr_no_and_date: Yup.date().required(ERROR_MSG),
    dept: Yup.string().required(ERROR_MSG),
    work_executed_at_district: Yup.string().required(ERROR_MSG),
    date_of_recieving: Yup.date().required(ERROR_MSG),
    by_dept: Yup.string().required(ERROR_MSG),
    name_of_bank: Yup.string().required(ERROR_MSG),
    branch: Yup.string().required(ERROR_MSG),
    dd_cheque: Yup.string().required(ERROR_MSG),
    cheque_no_or_ddno: Yup.string().required(ERROR_MSG),
    date: Yup.date().required(ERROR_MSG),
    amount: Yup.string().required(ERROR_MSG),
    office_name: Yup.string().required(ERROR_MSG),
    from_district: Yup.string().required(ERROR_MSG),
    lr_no: Yup.string().required(ERROR_MSG),

  })

export const InWardDBValidation =
  Yup.object().shape({
    inward_date_from: Yup.date().required(ERROR_MSG),
    inward_date_upto: Yup.date().required(ERROR_MSG),
  })
export const establishmentValidations =
Yup.object().shape({
establishmentName: Yup.string().required(ERROR_MSG),
postalDistrictCode: Yup.string().required(ERROR_MSG),
postalMadalCode: Yup.string().required(ERROR_MSG),
postalVillageCode: Yup.string().required(ERROR_MSG),
postalPincode: Yup.string().required(ERROR_MSG),
postalDoorNo: Yup.string().required(ERROR_MSG),
postalAddress: Yup.string().required(ERROR_MSG),
permanentDistrictCode: Yup.string().required(ERROR_MSG),
permanentMadalCode: Yup.string().required(ERROR_MSG),
permanentVillageCode: Yup.string().required(ERROR_MSG),
permanentPincode: Yup.string().required(ERROR_MSG),
permanentDoorNo: Yup.string().required(ERROR_MSG),
permanentAddress: Yup.string().required(ERROR_MSG),
managerName: Yup.string().required(ERROR_MSG),
managerEmail: Yup.string().required(ERROR_MSG),
managerMobile: Yup.string().required(ERROR_MSG).matches(MOBILE_VALIDATION, Mobile_Msg),
managerDistrict: Yup.string().required(ERROR_MSG),
managerMandal: Yup.string().required(ERROR_MSG),
managerVillage: Yup.string().required(ERROR_MSG),
managerDoorNo: Yup.string().required(ERROR_MSG),
managerPincode: Yup.string().required(ERROR_MSG),
managerAddress: Yup.string().required(ERROR_MSG),
establishmentCategory: Yup.string().required(ERROR_MSG),
natureOfConstruction: Yup.string().required(ERROR_MSG),
dateOfCommencement: Yup.date().required(ERROR_MSG),
dateOfCompletion: Yup.date().required(ERROR_MSG),
estCostOfConstruction: Yup.string().required(ERROR_MSG).matches(ONLY_NUMERIC,NUMERIC_Msg),
constructedArea: Yup.string().required(ERROR_MSG).matches(ONLY_NUMERIC,NUMERIC_Msg),
estimationBasis: Yup.string().required(ERROR_MSG).matches(ONLY_NUMERIC,NUMERIC_Msg),
planApproval: Yup.string().required(ERROR_MSG).matches(ONLY_NUMERIC,NUMERIC_Msg),
noOfWorkers: Yup.number().required(ERROR_MSG)
  })
  