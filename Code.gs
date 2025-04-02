// Replace with your Google Sheet ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

// Function to handle form submissions
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Check if this is an email subscription
    if (data.email) {
      return handleEmailSubscription(e);
    }
    
    // Handle regular contact form submission
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.subject,
      data.message,
      data.service
    ];
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle email subscription form submissions
function handleEmailSubscription(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Subscribers');
    
    // Check if email already exists
    const emails = sheet.getRange('B:B').getValues();
    const emailExists = emails.some(row => row[0] === data.email);
    
    if (emailExists) {
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Email already subscribed'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,
      data.email
    ];
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Email subscription saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
} 