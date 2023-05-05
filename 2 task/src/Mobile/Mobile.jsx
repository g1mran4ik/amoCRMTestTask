import Tgicon from "../images/tgicon.png";
import Phoneicon from "../images/phone.png";
import Whatsappicon from "../images/whatsappicon.png";
import "./Mobile.css";

export default function Mobile() {
  return (
    <>
      <div className="header-fixed-mobile">
        <div className="inter top-menu-mobile-text">Услуги</div>
        <div className="inter top-menu-mobile-text">Виджеты</div>
        <div className="inter top-menu-mobile-text">Интеграции</div>
        <div className="inter top-menu-mobile-text">Кейсы</div>
      </div>
      <div
        className="main-screen-mobile"
        style={{
          backgroundColor: "#1A1D23",
        }}
      >
        <div className="purple-light-mobile"></div>
        <div className="red-light-mobile"></div>
        <div className="purple-ball-mobile"></div>
        <div className="red-ball-mobile"></div>
        <div className="inter main-screen-text-mobile">
          Зарабатывайте больше
        </div>
        <div className="inter main-screen-text-gradient-mobile">с WEBEX</div>
        <div className="inter main-screen-description-text-mobile">
          Развиваем и контролируем продажи за вас
        </div>
        <div className="inter benefits-intro-text-mobile">
          Вместе с{" "}
          <span className="benefits-intro-gradient-text-mobile">
            бесплатной
          </span>{" "}
          <span className="benefits-intro-gradient-text-mobile">
            консультацией
          </span>{" "}
          мы дарим:
        </div>
        <div className="benefits-mobile">
          <div className="benefits-block-mobile">
            <div className="benefits-inner-block-mobile">
              <div className="line-mobile"></div>
              <div className="montserrat benefits-inner-block-text-mobile">
                Skype аудит
              </div>
            </div>
            <div className="benefits-inner-block-mobile">
              <div className="line-mobile"></div>
              <div className="montserrat benefits-inner-block-text-mobile">
                Dashboard
              </div>
            </div>
          </div>
          <div className="benefits-block-mobile right">
            <div className="benefits-inner-block-mobile">
              <div className="line-mobile"></div>
              <div className="montserrat benefits-inner-block-text-mobile">
                30 виджетов
              </div>
            </div>
            <div className="benefits-inner-block-mobile">
              <div className="line-mobile"></div>
              <div className="montserrat benefits-inner-block-text-mobile">
                Месяц аmoCRM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mobile">
        <div className="about-mobile">
          <div className="inter footer-text-header-mobile">О компании</div>
          <div className="footer-about-list-mobile">
            <div className="inter footer-main-text-mobile">
              Партнерская программа
            </div>
            <div className="inter footer-main-text-mobile">Вакансии</div>
          </div>
        </div>
        <div className="menu-mobile">
          <div className="inter footer-text-header-mobile">Меню</div>
          <div className="menu-list-mobile">
            <div className="menu-list-elements-mobile">
              <div className="inter footer-main-text-mobile">
                Расчёт стоимости
              </div>
              <div className="inter footer-main-text-mobile">Услуги</div>
              <div className="inter footer-main-text-mobile">Виджеты</div>
              <div className="inter footer-main-text-mobile">Интеграции</div>
              <div className="inter footer-main-text-mobile">Наши клиенты</div>
            </div>
            <div className="menu-list-elements-mobile footer-right">
              <div className="inter footer-main-text-mobile">
                Благодарность клиентов
              </div>
              <div className="inter footer-main-text-mobile">Кейсы</div>
              <div className="inter footer-main-text-mobile">Сертификаты</div>
              <div className="inter footer-main-text-mobile">
                Блог на Youtube
              </div>
              <div className="inter footer-main-text-mobile">
                Вопрос / Ответ
              </div>
            </div>
          </div>
        </div>
        <div className="contacts-mobile">
          <div className="inter footer-text-header-mobile">Контакты</div>
          <div className="inter footer-main-text-mobile">+7 555 555-55-55</div>
          <div className="footer-icons-mobile">
            <img src={Tgicon} alt="tg icon" style={{ marginRight: 14 }}></img>
            <img
              src={Phoneicon}
              alt="phone icon"
              style={{ marginRight: 14 }}
            ></img>
            <img src={Whatsappicon} alt="whatsapp icon"></img>
          </div>
          <div className="inter footer-main-text-mobile footer-adress">
            Москва, Путевой проезд 3с1, к 902
          </div>
          <div className="montserrat footer-rights-and-policy-text-mobile rights-text-mobile">
            ©WELBEX 2022. Все права защищены.
          </div>
          <a
            href=""
            className="montserrat footer-rights-and-policy-text-mobile"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </>
  );
}
