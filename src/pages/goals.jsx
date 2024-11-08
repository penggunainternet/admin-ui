import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goals" className="min-h-screen flex flex-col">
      {/* top content start */}
      <div className="mb-8">
        <div className="text-lg text-gray-02 mb-2">Goals</div>
        <div className="flex gap-5 flex-grow">
          <div className="w-1/3 flex flex-col">
            <Card className="flex-grow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam minus dicta odit qu
            </Card>
          </div>
          <div className="w-2/3">
            <Card>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquid ratione quam a ipsum quos sunt at commodi sapiente quod
              nihil, officiis voluptatum placeat fugiat molestiae itaque veniam
              praesentium veritatis.
            </Card>
          </div>
        </div>
      </div>
      {/* top content end */}

      {/* bottom content start */}
      <div className="mb-8">
        <div className="text-lg text-gray-02 mb-2">
          Expenses Goals by Category
        </div>
        <div className="grid sm:grid-cols-3 gap-6 flex-grow">
          <Card>isi 1</Card>
          <Card>isi 2</Card>
          <Card>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos sit, molestiae ducimus excepturi, aut dolorem laborum
            ad, nesciunt non vitae sunt provident eius eaque quidem! Perferendis
            laboriosam ducimus consequuntur quae.
          </Card>
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            aperiam cum? Deserunt quasi excepturi nostrum praesentium itaque
            molestiae molestias saepe nobis natus iusto fugiat eius, neque
            laborum officiis mollitia dolore!
          </Card>
          <Card>isi 5</Card>
          <Card>isi 6</Card>
        </div>
      </div>
      {/* bottom content end */}
    </MainLayout>
  );
};

export default GoalsPage;
