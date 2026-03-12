document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAnimo');
  const p = document.getElementById('parrafo');
  if (!btn || !p) return;

  const originalBtnText = btn.textContent;
  const originalPText = p.textContent;
  const originalPColor = getComputedStyle(p).color;

  const name = 'Pepe';
  const initials = 'P';
  const surname = 'ramirez';

  // estado para alternar
  let toggled = false;

  btn.addEventListener('click', () => {
    if (!toggled) {
      p.textContent = `¡Día fantástico para ${name}! (Ref: ${initials})`;
      p.style.color = 'orange';
    } else {
      p.textContent = originalPText;
      p.style.color = originalPColor;
    }
    toggled = !toggled;
  });

  btn.addEventListener('mouseenter', () => {
    btn.textContent = `¡Púlsame, ${surname}!`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.textContent = originalBtnText;
  });
});
