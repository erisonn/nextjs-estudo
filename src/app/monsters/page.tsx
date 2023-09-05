async function getData() {
  const res = await fetch("https://mhw-db.com/monsters");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface IMonster {
  name: string
  id: number
}

export default async function Monsters() {
  const data = await getData();
  return (
    <div>
      <h1>Monsters</h1>
      {data?.map((monster: IMonster) => (
        <p>{monster?.name}</p>
      ))}
    </div>
  );
}
