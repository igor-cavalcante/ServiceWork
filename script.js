const checkPermission = () => {
  if (!"serviceWorker" in navigator) {
    throw new Error("No support for service Worker");
  }

  if(!'Notification' in  window){
    throw new Error("No support fro notifications API");

  }
}; // checar se o navegador suporta o ws

const registerSW = async () => {
  const registration = await navigator.serviceWorker.register("sw.js");
  return registration;
};


const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if(permission !== 'granted'){
      throw new Error('Notification permission not granted');
    }else{
      new Notification("vai tomar banho desgraça");
    }
}

checkPermission();
registerSW();
requestNotificationPermission();
