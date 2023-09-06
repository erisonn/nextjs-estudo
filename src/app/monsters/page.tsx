import { getData } from "@/helpers/getData";

interface IMonster {
  name: string
  id: number
}

export default async function Monsters() {
  const data = await getData('/monsters');
  return (
    <div>
      <h1>Monsters</h1>
      {data?.map((monster: IMonster) => (
        <p>{monster?.name}</p>
      ))}
    </div>
  );
}
