const openVippsKioskButton = document.querySelector('#open-vipps-kiosk');
const kioskHelpDialog = document.querySelector('#kiosk-help-dialog');
const isInstalledApp = window.matchMedia('(display-mode: standalone)').matches
  || window.navigator.standalone === true;

openVippsKioskButton.addEventListener('click', () => {
  if (isInstalledApp) {
    window.location.href = 'vipps://qr.vipps.no/vp/WMaMeO7cp';
    return;
  }

  kioskHelpDialog.showModal();
});
