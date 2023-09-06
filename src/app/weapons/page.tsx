import { getData } from "@/helpers/getData";

interface IWeapon {
  name: string;
  id: number;
  assets: {
    image: string;
  };
}

export default async function Weapons() {
  const data = await getData("/weapons");

  return (
    <div>
      <h1>Weapons</h1>;
      <div>
        {data?.map((weapon: IWeapon) => (
          <div>
            <p>{weapon?.name}</p>
            <img src={weapon?.assets?.image} alt="weapon image" />
          </div>
        ))}
      </div>
    </div>
  );
}
