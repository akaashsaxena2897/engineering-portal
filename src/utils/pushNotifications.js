const requestNotification = window.onload = function() {

    Notification.requestPermission().then(permission=> Notification.permission = permission);
    if(Notifcation.permission == "granted"){
      
        createNotification();
    }
    else if (Notification.permission !=="denied"){
        Notification.requestPermission().then(permission => {
            if(permission == "granted"){
                createNotification();
            }
        })
    }
    
}

function askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission(permission) {
      // Whatever the user answers, we make sure Chrome stores the information
      if(!('permission' in Notification)) {
        Notification.permission = permission;
      }

      if (!"Notification" in window) {
        console.log("This browser does not support notifications.");
      } else {
        if(checkNotificationPromise()) {
          Notification.requestPermission()
          .then((permission) => {
            
            if(!('permission' in Notification)) {
                Notification.permission = permission;
              }
          })
        } else {
          Notification.requestPermission(function(permission) {
            
            if(!('permission' in Notification)) {
                Notification.permission = permission;
              }
          });
        }
      }
    }
}
   
 

  // Function to check whether browser supports the promise version of requestPermission()
  // Safari only supports the old callback-based version
  function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }

  function createNotification() {

    // Create and show the notification
    // let img = '/to-do-notifications/img/icon-128.png';
    let text = '"Title: New blog published"'+
    '"Details: "'+"<a href="#">Blog name</a> "+
    '"Optional Button: View"';
    let notification = new Notification('Enable Desktop Notifications', { body: text });
    
  }
module.exports = requestNotification;