// ===== Fungsi Ambil Info Guru Login =====
async function loadGuruInfoGlobal() {
  const baseUrl = localStorage.getItem("sheet_url_base");
  if (!baseUrl) return;

  try {
    const res = await fetch(baseUrl + "?type=dashboard");
    const data = await res.json();

    const nama = data.summary?.nama || "-";
    const mapel = data.summary?.mapel || "-";

    const namaEl = document.getElementById("nama");
    const mapelEl = document.getElementById("mapel");
    const avatarEl = document.getElementById("avatar");

    if (namaEl) namaEl.textContent = nama;
    if (mapelEl) mapelEl.textContent = mapel;

    // Avatar 2 huruf
    if (avatarEl) avatarEl.textContent = getInitials(nama);

  } catch (err) {
    console.error("Gagal memuat info guru:", err);
  }
}

// --- Helper Initial Avatar ---
function getInitials(nama) {
  if (!nama) return "??";
  const parts = nama.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
