import data from "../../data/index.json"

export default function Trainings(){
  return (
    <section className="trainings--section" id="MyTrainings">
      <div className="trainings--container-box">
        <div className="trainings--container">
          <p className="sub--title">Trainings</p>
          <h2 className="section--heading">My Trainings</h2>
        </div>
        
      </div>
      <div className="trainings--section--container">
        {data?.trainings?.map((item, index) => (
          <div key={index} className="trainings--section--card">
            <div className="trainings--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="trainings--section--card--content">
              <div>
                <h3 className="trainings--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm trainings--link">
              <a href={item.link}> Certificate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}