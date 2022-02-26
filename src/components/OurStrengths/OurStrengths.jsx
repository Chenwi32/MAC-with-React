import React from "react";
import TeamMember from "../home/teamMembers/TeamMember";
import { team_1, team_2, team_3, team_4 } from "../images/imageindex";

function OurStrengths() {
  return (
    <div>
      {/*//////////////// Why trust us ///////////////*/}

      <h2 className="title">Why you should trust us</h2>

      <div className="trust__us">
        <p className="trust__us-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          natus cumque impedit veritatis amet fugit excepturi? Sunt suscipit
          numquam adipisci iste ut ullam. Veniam commodi molestias suscipit ut
          maxime modi at doloremque perspiciatis nisi? Commodi iste eum hic
          facilis fugiat eaque, provident velit vel perspiciatis quasi ex quam
          non aliquid nam cum dicta beatae delectus quidem quod corrupti saepe.
          Corrupti ullam rem quo corporis maxime ratione provident in aliquam.
          Doloremque eaque blanditiis animi minima nulla, dolorum commodi
          officia, tempora consequatur odio ipsa velit dolorem quam corrupti
          rerum rem libero itaque numquam ipsam delectus illo vel magnam dicta?
        </p>
        <h3 className="title2 ">Meet the team commited to serve you</h3>
        <div className="team flex">
          <div className="team__member flex__col">
            <TeamMember
              image={team_1}
              title="Founder"
              comments="This project keeps me up at night"
              name="Chenwi Eugene"
            />
          </div>

          <div className="team__member-down flex__col">
            <TeamMember
              image={team_2}
              title="Lorem enginne"
              comments="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard."
              name="Eddie Seif"
            />
          </div>

          <div className="team__member flex__col">
            <TeamMember
              image={team_3}
              title="Lorem ipsum dolor"
              comments="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard."
              name="Irene Ekoti"
            />
          </div>
          <div className="team__member-down flex__col">
            <TeamMember
              image={team_4}
              title="Lorem ipsum"
              comments="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard."
              name="Nchida Nelson"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStrengths;
