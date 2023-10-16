import { TeamItem } from "./team-item"

export const Team = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 600 }}
                >
                    <h1 className="mb-3">Property Agents</h1>
                    <p>
                        Meet Our Property Agents: Your Trusted Partners in Real Estate.
                        Our team of experienced and dedicated property agents are also the users of this app. 
                        They're here to help you navigate the world of real estate with expertise and professionalism
                    </p>
                </div>
                <div className="row g-4">
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                </div>
            </div>
        </div>
    )
}