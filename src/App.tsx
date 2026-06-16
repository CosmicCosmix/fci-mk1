import { useEffect, useState } from 'react';

import './assets/css/animate.css';
import './assets/css/lineicons.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/style.css';

import logo from './assets/images/tbglogo.png';
import heroImg from './assets/images/hero.png';
import aboutHero from './assets/images/about_hero.png';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your actual form submission endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

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
                      <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} />
                    </a>

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
                          <a className="page-scroll" href="#home">Home<span></span></a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#about">About<span></span></a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#courses">Courses<span></span></a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#FAQs">FAQs<span></span></a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#contact">Contact<span></span></a>
                        </li>
                        <li className="nav-item">
                          <button
                              className="login-btn"
                              onClick={() => setShowLoginModal(true)}
                              type="button"
                          >
                            Login
                          </button>
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
              <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
              <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
              <li><a href="#"><i className="lni lni-instagram-filled"></i></a></li>
              <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
            </ul>

            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-6">
                  <div className="header_hero_content mt-45">
                    <h5 className="header_sub_title">Financial Campus India</h5>
                    <h2 className="header_title">Digital window for Insurance and Financial sectors</h2>
                    <span>Text</span>
                    <p>
                      Text
                    </p>
                    <a href="#about" className="main-btn page-scroll">Explore My Work</a>
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
                  <div className="service_icon"><i className="lni lni-code"></i></div>
                  <div className="service_content">
                    <h4 className="service_title"><a href="#">Pre-Licensing Life</a></h4>
                    <p>[description]</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="single_service mt-30">
                  <div className="service_icon"><i className="lni lni-layout"></i></div>
                  <div className="service_content">
                    <h4 className="service_title"><a href="#">Pre-Licensing General</a></h4>
                    <p>[description]</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="single_service mt-30">
                  <div className="service_icon"><i className="lni lni-ux"></i></div>
                  <div className="service_content">
                    <h4 className="service_title"><a href="#">POSP</a></h4>
                    <p>[description]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FAQs ====== */}
        <section id="FAQs" className="about_area pt-115 pb-120" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="row justify-content-center">
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

                <div className="faq-custom-accordion" id="faqAccordion">
                  {[
                    { q: "What is e-Learning?", a: "E-Learning is online, or web-based learning; it is tailor-made solution for learning and education." },
                    { q: "How is online training different from classroom training?", a: "Conventional contact classes require travelling and spending 15 to 20 days at the institute for training. In online training, you will be provided with a \"user id \" and \"password\" for logging in to the portal. You can visit the portal at the time most convenient to you." },
                    { q: "Do I need any special software training?", a: "Basic knowledge of computers including the use of keyboard and mouse is all that is necessary." },
                    { q: "Is there any specific location for training?", a: "You can take up training from anywhere in India. All you need is a computer with Internet facility." },
                    { q: "How do I start studying?", a: "The period starts when you receive the comformation from us getting user name and password after enrollment. The course can be accesses as many time as wished but within the access time period. The maximum time allowed for study online is 8 hour a day. The password to the course invalidates at the end of the period." },
                    { q: "What is Life Insurance?", a: "Life Insurance is a contract between the person who takes an insurance policy and an insurance company. The contract provides for payment of a sum of money to the life assured or to his nominee on the happening of an event. The event may be either death or the person surviving a specified age. A family is generally dependent for all its economic needs on the regular income brought by the breadwinner of the family. The uncertainty of deaths inherent in human life. As long as the breadwinner lives and the income is received steadily, that family is secure; but his sudden death leaves the family in a very difficult situation and sometimes in stark poverty. It is this uncertainty i.e. the risk, which gives rise to the necessity for some form of financial protection-loss arising from death. Insurance substitutes this uncertainty by certainty and also that of living to old age without visible means of support." },
                    { q: "Who is a life assured?", a: "The person on whose life risk is covered by an individual life insurance policy is called life assured." },
                    { q: "What is the objective of insurance?", a: "It could be- Financial security for the family, Provision for old age, Children's education. Redemption of loans, Tax saving." },
                    { q: "Does one need life insurance?", a: "Yes, if other people are dependent on a person and will suffer financially if he dies, then he needs life insurance. Life insurance is a necessity for anybody who has dependent children." },
                    { q: "Who can buy life insurance?", a: "A person who has attained majority (over 18 years of age) and is eligible to enter into a valid contract can buy an insurance policy for himself and on those in whom he has insurable interest." },
                    { q: "What is the period within which a policy can be revived?", a: "There is no such restriction, but it is not in policyholders' interest to revive a lapsed policy after 5 years on account of heavy sum that he will have to pay on revival for the arrears of premiums and the interest thereon." },
                    { q: "How much life insurance is enough?", a: "It depends upon the individual human life value which is a measure of the actual future earnings or service of an individual i.e. it is the capitalized value of an individual's net future earnings after subtracting the self-maintenance cost. The rough rule is: 15 to 20 times of your annual income depending on remaining working life OR 20% of annual income as premium." },
                    { q: "What are the basic life insurance plans?", a: "Whole Life Assurance Plans: These are low cost insurance plans where the sum assured is payable on the death of the insured. Term Assurance Plans: The sum assured is payable only on the death of the life assured during the term. Endowment Assurance Plans: The sum assured under these plans is payable on the date of maturity of the policy or on the death of the life assured, if earlier. Pension Plans: The plans provide for immediate or deferred pension for life to the purchaser." },
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
                                  color: '#00a78e',
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
        <section className="call_to_action_area">
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

        {/* ====== CONTACT US ====== */}
        <section id="contact" className="about_area pt-115 pb-120" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="row justify-content-center mb-80">
              <div className="col-lg-8">
                <div className="section_title text-center">
                  <h5 className="sub_title" style={{ color: '#00a78e' }}>Get in Touch</h5>
                  <h3 className="main_title">Contact Us</h3>
                  <ul className="line" style={{ justifyContent: 'center' }}>
                    <li style={{ backgroundColor: '#00a78e' }}></li>
                    <li style={{ backgroundColor: '#00a78e' }}></li>
                    <li style={{ backgroundColor: '#00a78e' }}></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Contact Information Cards */}
              <div className="col-lg-5 mb-50">
                <div className="contact_info_wrapper">
                  {[
                    {
                      title: 'The Boston Group',
                      details: [
                        'Boston Software Consultants India Private Limited',
                        'KANAKA DURGA MANSION,',
                        'PLOT NO.52,53 - 5th Phase,',
                        'KPHB Colony, Hyderabad - 500 072',
                        'Phone: +91-40-2305 2519/7547',
                        'Fax: +91-40-23058576',
                        'Email: info.fci@thebostongroup.com'
                      ]
                    },
                    {
                      title: 'K V Nageswar Rao',
                      subtitle: 'Incharge of Institute',
                      details: [
                        'Boston Software Consultants India Private Limited',
                        'Email: nrkota@thebostongroup.com',
                        'Phone Nos: 040-2305 2519/7547',
                        'Mobile: 9848098806'
                      ]
                    },
                    {
                      title: 'Chitra Rekha',
                      subtitle: 'Training Head',
                      details: [
                        'Boston Software Consultants India Private Limited',
                        'Email: crekha@thebostongroup.com',
                        'Phone Nos: 040-2305 2519/7547',
                        'Mobile: 9885496865'
                      ]
                    },
                    {
                      title: 'Jagannadha Raju',
                      subtitle: 'Web Administrator',
                      details: [
                        'Boston Software Consultants India Private Limited',
                        'Email: jraju@thebostongroup.com',
                        'Phone Nos: 040-2305 2519/7547',
                        'Mobile: 9948919134'
                      ]
                    },
                    {
                      title: 'V. Kamalakar Sastry',
                      subtitle: 'Life Faculty – Permanent',
                      details: [
                        'Plot No. 890',
                        'Pragathi Nagar',
                        'Opp: INTU, KPHB, Hyderabad - 90',
                        'Contact No: 09246924612'
                      ]
                    },
                    {
                      title: 'Gopal Krishna Murthy Ramaraju',
                      subtitle: 'Life Faculty – Permanent',
                      details: [
                        'H.No: 6-3-1216/56',
                        'Methodist Colony',
                        'Begumpet, Hyderabad 500016',
                        'Contact No: 09949694063'
                      ]
                    },
                    {
                      title: 'A. Chandrakanth',
                      subtitle: 'Life Faculty',
                      details: [
                        'H.No: 16-2-146/28/B/1&2',
                        'Dayanand Nagar, Malakpet',
                        'Hyderabad - 500036',
                        'Contact No: 09000567400'
                      ]
                    },
                    {
                      title: 'Dinesh M.V.',
                      subtitle: 'Life Faculty',
                      details: [
                        '8-3-232 C/5/a',
                        'Venkatagiri',
                        'Yousafguda Post Office',
                        'Hyderabad - 500045',
                        'Contact No: 093888078951'
                      ]
                    },
                    {
                      title: 'I. Satyanarayana',
                      subtitle: 'General Faculty – Permanent',
                      details: [
                        'Flat 501, Rose Block',
                        'Garden Towers, Masab Tank',
                        'Hyderabad - 28',
                        'Contact No: 09703334365'
                      ]
                    },
                    {
                      title: 'Chakravarthi Kancharla',
                      subtitle: 'General Faculty',
                      details: [
                        'SF-8, C Block',
                        'Ankita Apartments',
                        'Ramavarappadu, Vijayawada - 8',
                        'Contact No: 09397844717'
                      ]
                    }
                  ].map((info, index) => (
                      <div
                          key={index}
                          className="contact_info_card"
                          style={{
                            backgroundColor: '#f8f8f8',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '25px',
                            borderLeft: '4px solid #00a78e',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0, 167, 142, 0.15)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                          }}
                      >
                        <h4 style={{ color: '#293651', marginBottom: '8px', fontSize: '18px', fontWeight: 600 }}>
                          {info.title}
                        </h4>
                        {info.subtitle && (
                            <p style={{ color: '#00a78e', fontSize: '14px', marginBottom: '12px', fontWeight: 500 }}>
                              {info.subtitle}
                            </p>
                        )}
                        <div>
                          {info.details.map((detail, idx) => (
                              <p
                                  key={idx}
                                  style={{
                                    color: '#646F87',
                                    fontSize: '14px',
                                    lineHeight: '1.8',
                                    margin: '4px 0'
                                  }}
                              >
                                {detail.includes('Email:') ? (
                                    <>
                                      {detail.split(':')[0]}:{' '}
                                      <a href={`mailto:${detail.split(': ')[1]}`} style={{ color: '#00a78e', textDecoration: 'none' }}>
                                        {detail.split(': ')[1]}
                                      </a>
                                    </>
                                ) : detail.includes('Phone') || detail.includes('Mobile') ? (
                                    <>
                                      {detail.split(':')[0]}:{' '}
                                      <a href={`tel:${detail.split(': ')[1]?.replace(/\D/g, '')}`} style={{ color: '#00a78e', textDecoration: 'none' }}>
                                        {detail.split(': ')[1]}
                                      </a>
                                    </>
                                ) : (
                                    detail
                                )}
                              </p>
                          ))}
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-7 ps-lg-40">
                <div className="contact_form_wrapper">
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-30">
                        <div className="form_group">
                          <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleFormChange}
                              required
                              style={{
                                width: '100%',
                                padding: '15px 20px',
                                border: '1px solid #e8e8e8',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: '"Open Sans", sans-serif',
                                transition: 'border-color 0.3s ease',
                                boxSizing: 'border-box'
                              }}
                              onFocus={(e) => (e.currentTarget.style.borderColor = '#00a78e')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = '#e8e8e8')}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-30">
                        <div className="form_group">
                          <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleFormChange}
                              required
                              style={{
                                width: '100%',
                                padding: '15px 20px',
                                border: '1px solid #e8e8e8',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: '"Open Sans", sans-serif',
                                transition: 'border-color 0.3s ease',
                                boxSizing: 'border-box'
                              }}
                              onFocus={(e) => (e.currentTarget.style.borderColor = '#00a78e')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = '#e8e8e8')}
                          />
                        </div>
                      </div>

                      <div className="col-md-12 mb-30">
                        <div className="form_group">
                          <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleFormChange}
                              required
                              style={{
                                width: '100%',
                                padding: '15px 20px',
                                border: '1px solid #e8e8e8',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: '"Open Sans", sans-serif',
                                transition: 'border-color 0.3s ease',
                                boxSizing: 'border-box'
                              }}
                              onFocus={(e) => (e.currentTarget.style.borderColor = '#00a78e')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = '#e8e8e8')}
                          />
                        </div>
                      </div>

                      <div className="col-md-12 mb-30">
                        <div className="form_group">
                          <textarea
                              name="message"
                              placeholder="Your Message"
                              rows={6}
                              value={formData.message}
                              onChange={handleFormChange}
                              required
                              style={{
                                width: '100%',
                                padding: '15px 20px',
                                border: '1px solid #e8e8e8',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: '"Open Sans", sans-serif',
                                resize: 'none',
                                transition: 'border-color 0.3s ease',
                                boxSizing: 'border-box'
                              }}
                              onFocus={(e) => (e.currentTarget.style.borderColor = '#00a78e')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = '#e8e8e8')}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <button
                            type="submit"
                            disabled={loading}
                            className="main-btn"
                            style={{
                              opacity: loading ? 0.7 : 1,
                              cursor: loading ? 'not-allowed' : 'pointer'
                            }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>

                      {submitted && (
                          <div className="col-md-12 mt-20">
                            <div
                                style={{
                                  padding: '15px 20px',
                                  backgroundColor: '#d4edda',
                                  border: '1px solid #c3e6cb',
                                  borderRadius: '6px',
                                  color: '#155724',
                                  fontSize: '14px'
                                }}
                            >
                              ✓ Thank you for your message! We'll get back to you soon.
                            </div>
                          </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FOOTER ====== */}
        <footer id="footer" className="footer_area gray-bg pt-115 pb-120">
          <div className="container">
            {/* Existing Footer Content */}
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

                  <span className="email">Connect With Us</span>

                  <p className="credit pt-45">
                    © 2018 {' '}
                    <a href="http://www.financialcampusindia.com/" rel="nofollow">
                      Financial Campus India.&nbsp;
                    </a>
                    All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
            {/* Link Columns */}
            <div className="row footer_links_wrapper">

              <div className="col-md-4">
                <ul className="footer_links_column">
                  <li><a className="page-scroll" href="#home">Home</a></li>
                  <li><a className="page-scroll" href="#about">About</a></li>
                  <li><a className="page-scroll" href="#courses">Courses</a></li>
                  <li><a className="page-scroll" href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="footer_links_column">
                  <li><a href="#topics">Topics</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Services</a></li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="footer_links_column">
                  <li><a href="#">Topics</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#" className="highlight">Mobile App</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {showLoginModal && (
            <div
                className="login-modal-overlay"
                onClick={() => setShowLoginModal(false)}
            >
              <div
                  className="login-modal"
                  onClick={(e) => e.stopPropagation()}
              >
                <button
                    className="login-modal-close"
                    onClick={() => setShowLoginModal(false)}
                >
                  ×
                </button>

                <div className="login-modal-left">
                  <img
                      src={aboutHero}
                      alt="Login"
                      className="login-modal-image"
                  />
                </div>

                <div className="login-modal-right">
                  <h2>Sign In</h2>

                  <form>
                    <input
                        type="text"
                        placeholder="Username"
                        className="login-input"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                    />

                    <button
                        type="button"
                        className="login-submit-btn"
                    >
                      SIGN IN
                    </button>

                    <button
                        type="button"
                        className="login-otp-btn"
                    >
                      LOGIN WITH OTP
                    </button>

                    <div className="login-divider">
                      <span>OR</span>
                    </div>

                    <button
                        type="button"
                        className="signup-link-btn"
                    >
                      Create Account
                    </button>

                    <div className="login-social">
                      <a href="#"><i className="lni lni-facebook"></i></a>
                      <a href="#"><i className="lni lni-twitter"></i></a>
                      <a href="#"><i className="lni lni-linkedin"></i></a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        )}
      </>
  );
}

export default App;