function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <span>📝 Yuk mulai bikin catatan!</span>
      </footer>
    );
  }

  const totalItems = items.length;
  const totalDone = items.filter((item) => item.done).length;
  const percentDone = Math.round((totalDone / totalItems) * 100);
  return (
    <footer className="stats">
      <span>
        {percentDone === 100
          ? "✅ Kamu sudah melakukannya semua"
          : `🗒️ Kamu punya ${totalItems} catatan dan baru ${totalDone} yg dichecklist (${percentDone}%)`}
      </span>
    </footer>
  );
}
export default Stats;
