export const showPDF = (imgg) => ConvertFileToBase64(imgg)
  .then(base64Data => base64Data.split(',')[1]) // Directly return the extracted data
  .catch(error => {
    console.error('Error:', error);
  });

async function ConvertFileToBase64(fileUrl) {
  const response = await fetch(fileUrl);
  const blob = await response.blob();
  
  // No need to `await` here, return the Promise directly
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}