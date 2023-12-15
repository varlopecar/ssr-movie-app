import ClientHead from "@/components/ClientHead";
import ApplicationApi from "@/services/api/application";

type Props = {
  id: number;
};

async function PageHead({ id }: Props) {
  const playlist = await ApplicationApi.playlist.get(id);

  return (
    <ClientHead
      title={`${playlist.name} - My movies`}
      description={`Page details of playlist: ${playlist.name}`}
    />
  );
}

export default PageHead;