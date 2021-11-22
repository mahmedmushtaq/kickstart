import Button from "../../UIComponents/Button";

export default () => {
  return (
    <div className="mt-20 text-center">
      <div className="w-3/5 mx-auto">
        <div className=" text-center font-gilroyBold">
          <h2 className="text-7xl">
            Why <span className="text-secondary">You</span> Need To{" "}
            <span className="text-secondary">Invest</span> <br /> Through Us? 🚀
          </h2>
        </div>

        <div>
          <p className="font-gilroy mt-10">
            Our platform is based on the Blockchain technology. As a Investor
            you will know where all of your money spend by the founders.
            Whenever they need to spend money they need to ask permission from
            you and once you will verify them then money will release otherwise
            money will remain in our account and you can refund your payment at
            any time
          </p>

          <Button className="mt-10" variant="contained">
            More Explaination
          </Button>
        </div>
      </div>
    </div>
  );
};
