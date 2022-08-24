import fetch from "node-fetch";
const host = "stardewvalleywiki.com";
const APIPath = "/mediawiki/api.php";
const APIURL = `https://${host}${APIPath}`;

const main = async (): Promise<void> => {
  const result = await fetch(
    `${APIURL}?action=query&prop=revisions&titles=Pet_door&rvslots=*&rvprop=content&formatversion=2`
  );
  console.log(result);
};

main();
