export default function White(){
    return (
      <div>
        <div
          style={{
            backgroundImage: `url("https://cdn.discordapp.com/attachments/910172830203785256/910173445160042556/mountain.png")`,
          }}
        >
          <div className="flex bg-cover flex-col p-8 pt-32 gap-y-5 lg:flex-row gap-48 lg:p-24 lg:pt-40 xl:py-0 xl:pt-48">
            <div>
              <div className=" flex flex-col gap-5 ">
                <h1 className="text-4xl clearsans-bold ">Why Go Bankless?</h1>
                <p className="text-lg clearsans-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  rem recusandae distinctio libero sint. Labore, neque? Quasi
                  pariatur laborum ut labore ipsum non unde illum eos quam
                  voluptates corporis doloribus accusantium, rerum obcaecati
                  harum quidem corrupti enim dolor aliquid saepe quis laudantium
                  eum. Qui perspiciatis enim illum provident quasi dolores.
                </p>
                <div className="flex justify-center mt-12">
                  <img
                    className="w-4/6 lg:w-full xl:w-4/5"
                    src="https://cdn.discordapp.com/attachments/910172830203785256/910173467062702161/Bankless_2021_POAP.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="">
                <h1 className="text-4xl clearsans-bold ">Decentralisation</h1>
                <p className="text-lg mt-5 clearsans-regular">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>

              <div>
                <h1 className="text-4xl clearsans-bold ">Financial Freedom</h1>
                <p className="text-lg mt-5 clearsans-regular ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>

              <div>
                <h1 className="text-4xl mt-5 clearsans-bold ">Collaborative</h1>
                <p className="text-lg clearsans-regular ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url("https://media.discordapp.net/attachments/910172830203785256/910173458405687306/waves.png?width=1440&height=580")`,
            }}
            className="w-full h-max bg-cover bg-no-repeat p-8 xl:p-64"
          >
            <div className="text-black">
              <h1 className="text-xl lg:text-4xl clearsans-bold">
                START YOUR FIRST QUEST
              </h1>
              <p className="text-md lg:text-lg clearsans-regular">
                and begin your journey into Web3, Defi,
                <br /> and Financial independence with the <br /> Bankless DAO.
              </p>
            </div>
            <button className="clearsans-bold text-black text-2xl bg-white p-4 rounded-3xl mt-8">
              BEGIN QUEST
            </button>
          </div>
        </div>
      </div>
    );
}