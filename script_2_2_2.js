
// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const isReload = (() => {
    const navEntries = performance.getEntriesByType && performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length) {
      return navEntries[0].type === 'reload';
    }
    if (performance.navigation) {
      return performance.navigation.type === performance.navigation.TYPE_RELOAD;
    }
    return false;
  })();

  if (isReload) {
    const h1 = document.querySelector('h1');
    if (h1) h1.textContent = '¡DOM controlado por Pepe!';

    const caja = document.getElementById('caja');
    if (caja) caja.style.backgroundColor = 'cyan';
  }
});
// ...existing code...