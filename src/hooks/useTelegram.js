// file with all telegram instruments
//Object for working woth telegram
const tg = window.Telegram.WebApp;

// all instruments connected with telegram
export function useTelegram() {
  // event function which will close App
  const onClose = () => {
    tg.close();
  };

  // eventListener onToggle works when user opens or closes element
  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    // global telegram object
    tg,
    // user data
    user: tg.initDataUnsafe?.user,
  };
}
