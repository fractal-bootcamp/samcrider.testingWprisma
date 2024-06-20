import client from "./client";

const seed = async () => {
  await client.user.createMany({
    data: [
      {
        id: 1,
        name: "jake",
        email: "jake@gmail.com",
      },
      {
        id: 2,
        name: "sam",
        email: "sam@gmail.com",
      },
    ],
  });
};

export default seed;
