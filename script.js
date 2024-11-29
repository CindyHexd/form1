function doPost(e) {
    try {
      const sheet = SpreadsheetApp.openById("19vDHb-_gUG3nSE_pYZ2ULfJWrCe1hPvjO__4A6oeyGI").getSheetByName("Sheet1");
      const name = e.parameter.name; // Get the 'name' parameter from the form data
      sheet.appendRow([new Date(), name]); // Append the timestamp and name
      return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
  }
  
  // Enable the web app
  function doGet(e) {
    return ContentService.createTextOutput("Web app is running!");
  }
  