import { useEffect } from 'react';

import './assets/css/animate.css';
import './assets/css/lineicons.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/style.css';

import logo from './assets/images/logo.svg';
import heroImg from './assets/images/hero.png';
import aboutHero from './assets/images/about_hero.png';

function App() {

  useEffect(() => {


    const loadScript = (src: string): Promise<void> =>
        new Promise((resolve, reject) => {

          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.async = false;          // keep execution order
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Failed to load ${src}`));
          document.body.appendChild(script);
        });

    const initScripts = async () => {
      try {

        await loadScript('/src/assets/js/vendor/jquery-1.12.4.min.js');

        await loadScript('/src/assets/js/bootstrap.min.js');

        await loadScript('/src/assets/js/jquery.appear.min.js');
        await loadScript('/src/assets/js/jquery.easing.min.js');
        await loadScript('/src/assets/js/scrolling-nav.js');

        await loadScript('/src/assets/js/main.js');
      } catch (err) {
        console.warn('Template script load error:', err);
      }
    };

    initScripts();
  }, []);

  return (
      <>

        {/* ====== HEADER ====== */}
          <section className="header_area">
            <div className="header_navbar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                      <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" />
                      </a>

                      {/*
                    Bootstrap 5 uses data-bs-* attributes.
                    Bootstrap 4 used data-toggle / data-target.
                    Since the CSS bundled is bootstrap.min.css from the template (likely v4),
                    but the npm package installed is v5, we include BOTH sets of attributes
                    so it works regardless of which JS ends up active at runtime.
                  */}
                      <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                      </button>

                      <div
                          className="collapse navbar-collapse sub-menu-bar"
                          id="navbarSupportedContent"
                      >
                        <ul id="nav" className="navbar-nav ml-auto">
                          <li className="nav-item active">
                            <a className="page-scroll" href="#home">
                              Home<span></span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="page-scroll" href="#about">
                              About<span></span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="page-scroll" href="#courses">
                              Courses<span></span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="page-scroll" href="#FAQs">
                              FAQs<span></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div id="home" className="header_hero">
              <ul className="header_social d-none d-lg-block">
                <li>
                  <a href="#">
                    <i className="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-twitter-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-instagram-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-linkedin-original"></i>
                  </a>
                </li>
              </ul>

              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                  <div className="col-lg-6">
                    <div className="header_hero_content mt-45">
                      <h5 className="header_sub_title">Financial Campus India</h5>
                      <h2 className="header_title">Digital window for Insurance and Financial sectors</h2>
                      <span>Full-Stack Software Developer</span>
                      <p>
                        Passionate about building scalable applications and APIs using
                        the .NET ecosystem, React, and TypeScript.
                      </p>
                      <a href="#about" className="main-btn">
                        Explore My Work
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-7">
                    <div className="header_hero_image mt-50">
                      <img src={heroImg} alt="hero" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="header_hero_shape d-none d-lg-block"></div>
            </div>
          </section>

        {/* ====== ABOUT ====== */}
          <section id="about" className="about_area pt-70 pb-120">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-9">
                  <div className="about_image mt-50">
                    <img src={aboutHero} alt="Hero" />
                    <div className="about_shape"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="about_content mt-45">
                    <div className="section_title">
                      <h5 className="sub_title">About</h5>
                      <h3 className="main_title">Our Work & Experience</h3>
                      <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>

                    <p>
                      With wealth of experience in providing quality training and educational services, the Financialcampusindia.com evolved from financialcampus.com, USA. Offering over 30,000 hours of approved insurance continuing education credits in 50 states in the United States, and various licensing designations in Securities Insurance, CFP, CPA, CLU, CPCU, IRS EA and more, financialcampus courses are best known for their professional education and pre-licensing needs in the USA.
                    </p>
                    <p>
                      Financial campus India is an initiative promoted by The Boston Group, USA to bring online training to offer education and training services to the financial sector. With a view to fulfilling a training and continuing educational niche in the financial sector, For nearly three decades, we have offered our clients insight in the form of cooperative research and value-added marketing and distribution expertise. Insight that helps you to identify trends, evaluate options, and implement solutions. All of which leads to one clear outcome: the growth of your company.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* ====== Courses ====== */}
          <section id="courses" className="services_area pt-115 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section_title text-center pb-30">
                    <h5 className="sub_title">Courses</h5>
                    <h3 className="main_title">To Help Your Employees</h3>
                    <ul className="line">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="single_service mt-30">
                    <div className="service_icon">
                      <i className="lni lni-code"></i>
                    </div>
                    <div className="service_content">
                      <h4 className="service_title"><a href="#">Pre-Licensing Life</a></h4>
                      <p>
                        [description]
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single_service mt-30">
                    <div className="service_icon">
                      <i className="lni lni-layout"></i>
                    </div>
                    <div className="service_content">
                      <h4 className="service_title"><a href="#">Pre-Licensing General</a></h4>
                      <p>
                        [description]
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single_service mt-30">
                    <div className="service_icon">
                      <i className="lni lni-ux"></i>
                    </div>
                    <div className="service_content">
                      <h4 className="service_title"><a href="#">POSP</a></h4>
                      <p>
                        [description]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* ====== FAQs ====== */}
        <section id="FAQs" className="about_area pt-115 pb-120" style={{ backgroundColor: '#ffffff' }}>
          <div className="container"> {/* Switched from container-lg to standard container */}
            <div className="row justify-content-center">
              {/* Added responsive columns to prevent touching the screen edges on smaller devices */}
              <div className="col-lg-8 col-md-10 col-12 px-3">

                <div className="section_title text-center pb-30">
                  <h5 className="sub_title" style={{ color: '#00a78e' }}>FAQs</h5>
                  <h3 className="main_title">Frequently Asked Questions</h3>
                  <ul className="line">
                    <li style={{ backgroundColor: '#00a78e' }}></li>
                    <li style={{ backgroundColor: '#00a78e' }}></li>
                    <li style={{ backgroundColor: '#00a78e' }}></li>
                  </ul>
                </div>

                {/* Unique ID for the accordion parent to prevent JS clashes */}
                <div className="faq-custom-accordion" id="faqAccordion">
                  {[
                    // E-Learning
                    { q: "What is e-Learning?", a: "E-Learning is online, or web-based learning; it is tailor-made solution for learning and education." },
                    { q: "How is online training different from classroom training?", a: "Conventional contact classes require travelling and spending 15 to 20 days at the institute for training. In online training, you will be provided with a \"user id \" and \"password\" for logging in to the portal. You can visit the portal at the time most convenient to you." },
                    { q: "Do I need any special software training?", a: "Basic knowledge of computers including the use of keyboard and mouse is all that is necessary." },
                    { q: "Is there any specific location for training?", a: "You can take up training from anywhere in India. All you need is a computer with Internet facility." },
                    // The Course
                    { q: "How do I start studying?", a: "The period starts when you receive the comformation from us getting user name and password after enrollment. The course can be accesses as many time as wished but within the access time period. The maximum time allowed for study online is 8 hour a day. The password to the course invalidates at the end of the period." },
                    // Life Insurance
                    { q: "What is Life Insurance?", a: "Life Insurance is a contract between the person who takes an insurance policy and an insurance company. The contract provides for payment of a sum of money to the life assured or to his nominee on the happening of an event. The event may be either death or the person surviving a specified age. A family is generally dependent for all its economic needs on the regular income brought by the breadwinner of the family. The uncertainty of deaths inherent in human life. As long as the breadwinner lives and the income is received steadily, that family is secure; but his sudden death leaves the family in a very difficult situation and sometimes in stark poverty. It is this uncertainty i.e. the risk, which gives rise to the necessity for some form of financial protection-loss arising from death. Insurance substitutes this uncertainty by certainty and also that of living to old age without visible means of support." },
                    { q: "Who is a life assured?", a: "The person on whose life risk is covered by an individual life insurance policy is called life assured." },
                    { q: "What is the objective of insurance?", a: "It could be- Financial security for the family, Provision for old age, Children's education. Redemption of loans, Tax saving." },
                    { q: "Does one need life insurance?", a: "Yes, if other people are dependent on a person and will suffer financially if he dies, then he needs life insurance. Life insurance is a necessity for anybody who has dependent children." },
                    { q: "Who can buy life insurance?", a: "A person who has attained majority (over 18 years of age) and is eligible to enter into a valid contract can buy an insurance policy for himself and on those in whom he has insurable interest." },
                    { q: "What is the period within which a policy can be revived?", a: "There is no such restriction, but it is not in policyholders' interest to revive a lapsed policy after 5 years on account of heavy sum that he will have to pay on revival for the arrears of premiums and the interest thereon." },
                    { q: "How much life insurance is enough?", a: "It depends upon the individual human life value which is a measure of the actual future earnings or service of an individual i.e. it is the capitalized value of an individual's net future earnings after subtracting the self-maintenance cost. The rough rule is: 15 to 20 times of your annual income depending on remaining working life OR 20% of annual income as premium." },
                    { q: "What are the basic life insurance plans?", a: "Whole Life Assurance Plans: These are low cost insurance plans where the sum assured is payable on the death of the insured. Term Assurance Plans: The sum assured is payable only on the death of the life assured during the term. Endowment Assurance Plans: The sum assured under these plans is payable on the date of maturity of the policy or on the death of the life assured, if earlier. Pension Plans: The plans provide for immediate or deferred pension for life to the purchaser." },
                    // General Insurance
                    { q: "What is Insurance?", a: "Insurance is a mechanism by which the losses suffered by a few are spread over many, exposed to similar risks. Insurance is a protection against financial loss arising on the happening of an unexpected event. Insurance companies collect premiums to provide for this protection. A loss is paid out of the premiums collected from the insuring public and the insurance companies act as trustees to the amount collected." },
                    { q: "Why do I need Insurance?", a: "Insurance is a hedge against the occurrence of unforeseen incidents. Insurance products help you in not only mitigating risks but also helps you by providing a financial cushion against adverse financial burdens suffered." },
                    { q: "What are the types of insurances?", a: "Insurance business is divided into four classes: 1) Life Insurance 2) Fire Insurance 3) Marine Insurance and 4) Miscellaneous Insurance. Life Insurers transact life insurance business; General Insurers transact the rest. No insurance company can transact both Life and General insurance business as per law in India." },
                    { q: "What is General Insurance or Non-Life Insurance?", a: "All insurance covers other than Life are called General Insurance. Fire, Marine, Motor, Health, Burglary, Personal Accident, Household, Shopkeeper Insurance and Engineering Insurance are examples of General Insurance coverage." },
                    { q: "What does General Insurance do for me?", a: "Accidents... illness... fire... financial securities are the things that one would worry about any time. General Insurance provides the much-needed protection against such unforeseen events. General Insurance is not meant to offer returns but is a protection against contingencies. Some types of insurance like Motor Insurance and Public Liability Insurance are compulsory under the law in India." },
                    { q: "How much Insurance do I need?", a: "It is important to have adequate amount of coverage for each insurance policy. For any asset or property insurance, the value of the asset based on market value or reinstatement value should be taken into consideration before deciding sum insured. If the sum insured is not adequate, the percentage representing the uncovered portion of the asset is to be borne by the insured." },
                    { q: "What all can be covered under insurance?", a: "Almost everything that has a financial value in a person's life and has a probability of getting lost, stolen or damaged, can be covered through insurance. Property (both movable and immovable), vehicle, cash, household goods, health, dishonesty and also liability towards others can be covered." },
                    { q: "What is Insurable Interest?", a: "The owner of the property has a legal right to obtain insurance on the property if he is likely to suffer any financial loss. When the property is lost/damaged, only person having legal right in the property can ask for claim under insurance Only person having insurable interest in the property can get the property insured." },
                    { q: "What is premium?", a: "Premium is the price payable by the proposer for purchasing the insurance products." },
                    { q: "What is Mediclaim?", a: "Mediclaim Policy provides reimbursement of hospitalization expenses for illness/disease suffered or accidental injury sustained during the term of the policy" },
                    { q: "Which are the major General Insurance Companies in India?", a: "Some of the major general insurance companies in India are: Agriculture Insurance Co. of India Ltd. Apollo DKV Insurance Company Limited. Bajaj Allianz General Insurance Co. Ltd. Export Credit Guarantee Corporation Ltd. HDFC-Chubb General Insurance Co. Ltd. ICICI Lombard General Insurance Co Ltd. National Insurance Co. Ltd. Reliance General Insurance Co. Ltd. Royal Sundaram Alliance Insurance Co Ltd. Star Health and Allied Insurance Company Limited Tata AIG General Insurance Co. Ltd. The New India Assurance Co. Ltd. The Oriental Insurance Co. Ltd. United India Insurance Co Ltd." }
                  ].map((faq, index) => (
                      <div
                          className="faq-custom-card"
                          key={index}
                          style={{
                            backgroundColor: '#ffffff',
                            borderBottom: '1px solid rgba(0, 167, 142, 0.2)',
                            marginBottom: '8px',
                            borderRadius: '6px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                          }}
                      >
                        {/* Renamed card-header to faq-custom-header to avoid template style clashes */}
                        <div className="faq-custom-header" id={`faqHeading${index}`} style={{ padding: '0.5rem 1rem' }}>
                          <h2 className="clearfix mb-0">
                            <a
                                className={`btn btn-link ${index !== 0 ? 'collapsed' : ''}`}
                                data-toggle="collapse"
                                data-target={`#faqCollapse${index}`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#faqCollapse${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`faqCollapse${index}`}
                                style={{
                                  color: '#00a78e', // Custom theme color
                                  fontSize: '1.05rem',
                                  textAlign: 'left',
                                  position: 'relative',
                                  fontWeight: 600,
                                  paddingLeft: '2.5rem',
                                  textDecoration: 'none',
                                  whiteSpace: 'normal',
                                  display: 'block',
                                  cursor: 'pointer'
                                }}
                            >
                              <i
                                  className="lni lni-chevron-down"
                                  style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    left: 0,
                                    top: '4px',
                                    transition: 'transform 0.3s'
                                  }}
                              ></i>
                              {faq.q}
                            </a>
                          </h2>
                        </div>
                        <div
                            id={`faqCollapse${index}`}
                            className={`collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`faqHeading${index}`}
                            data-parent="#faqAccordion"
                            data-bs-parent="#faqAccordion"
                        >
                          {/* Renamed card-body to faq-custom-body */}
                          <div className="faq-custom-body" style={{ color: '#555', padding: '0.5rem 1rem 1.5rem 3.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            {faq.a}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== CALL TO ACTION ====== */}
          <section id="contact" className="call_to_action_area">
            <div className="container">
              <div className="call_to_action_wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="call_to_action_box d-md-flex justify-content-between align-items-center">
                      <div className="call_to_action_content">
                        <h3 className="action_title">Let's build something great together.</h3>
                        <ul className="line">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                        <p>
                          Whether you need a full-stack application, an API backbone, or a
                          scalable frontend interface, I'm ready to collaborate.
                        </p>
                      </div>

                      <div className="call_to_action_btn">
                        <a href="mailto:pixel.abhilash@gmail.com" className="main-btn">
                          REACH OUT
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ====== FOOTER ====== */}
          <footer id="footer" className="footer_area gray-bg pt-115 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer_content text-center">
                    <a href="#">
                      <img src={logo} alt="Logo" />
                    </a>
                    <ul className="footer_social">
                      <li><a href="#"><i className="lni lni-facebook"></i></a></li>
                      <li><a href="#"><i className="lni lni-twitter"></i></a></li>
                      <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                      <li><a href="#"><i className="lni lni-linkedin"></i></a></li>
                    </ul>
                    <span className="email">pixel.abhilash@gmail.com</span>
                    <ul className="footer_menu">
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About Me</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                    </ul>
                    <p className="credit pt-45">
                      Template Designed and Developed by{' '}
                      <a href="https://uideck.com/" rel="nofollow">UIdeck</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </>
  );
}

export default App;