import Welbexicon from "../images/Welbexicon.png";
import Welbexicontext from "../images/Welbexicontext.png";
import Tgicon from "../images/tgicon.png";
import Phoneicon from "../images/phone.png";
import Whatsappicon from "../images/whatsappicon.png";
import "./Desktop.css";

export default function Desktop() {
  return (
    <div
      className="main-block"
      style={{
        backgroundColor: "#0E1014",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <div className="purple-light"></div>
      <div className="red-light"></div>
      <div className="purple-ball"></div>
      <div className="red-ball"></div>
      <div className="red-ball-mini"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: 73,
            marginTop: 57,
          }}
        >
          <div>
            <div className="logo-webex">
              <img src={Welbexicon} alt="Welbex icon"></img>
              <img
                src={Welbexicontext}
                alt="Welbex icon text"
                style={{ marginLeft: 8, marginBottom: 5 }}
              ></img>
            </div>
            <div className="montserrat-10">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
          </div>
          <div
            className="menu-important"
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "2%",
            }}
          >
            <div className="inter-16-menu">Услуги</div>
            <div className="inter-16-menu">Виджеты</div>
            <div className="inter-16-menu">Интеграции</div>
            <div className="inter-16-menu">Кейсы</div>
            <div className="inter-16-menu">Сертификаты</div>
          </div>
          <div className="inter-16-phone">+7 555 555-55-55</div>
          <div className="refs" style={{ width: 119, height: 20 }}>
            <img src={Tgicon} alt="tg icon"></img>
            <img
              src={Phoneicon}
              alt="phone icon"
              style={{ marginLeft: "28.5%" }}
            ></img>
            <img
              src={Whatsappicon}
              alt="whatsapp icon"
              style={{ marginLeft: "28.5%" }}
            ></img>
          </div>
        </div>
        <div
          className="main-text"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="motivation-text" style={{ marginTop: 94 }}>
            <div className="inter-48">Зарабатывайте больше</div>
            <div className="inter-40">с WELBEX</div>
            <div className="montserrat-18">
              Развиваем и контролируем продажи за вас
            </div>
          </div>
          <div
            className="benefits"
            style={{
              marginTop: 94,
              display: "flex",
              flexDirection: "column",
              alignItems: "right",
              width: 291,
              textAlign: "right",
            }}
          >
            <div className="inter-18-no-letter-spacing">
              Вместе с <span>бесплатной</span>{" "}
              <span className="lessRedGrad">консультацией</span> мы дарим:
            </div>
            <div
              className="benefits-box-one"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
                marginTop: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                }}
              >
                <div className="inter-18">ВИДЖЕТЫ</div>
                <div className="montserrat-16">30 готовых решений</div>
              </div>
              <div>
                <div className="inter-18">DASHBOARD</div>
                <div className="montserrat-16">
                  с показателями вашего бизнеса
                </div>
              </div>
            </div>
            <div
              className="benefits-box-two"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
                marginTop: 30,
              }}
            >
              <div>
                <div className="inter-18">SKYPE АУДИТ</div>
                <div className="montserrat-16">отдела продаж и CRM системы</div>
              </div>
              <div>
                <div className="inter-18">35 ДНЕЙ</div>
                <div className="montserrat-16">использования CRM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-zone">
          <button className="get-button">
            <div className="inter-16">Получить консультацию</div>
          </button>
        </div>
        <div
          className="footer"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 124,
          }}
        >
          <div className="about">
            <div className="inter-14-about">О компании</div>
            <div
              className="about-list"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="inter-16-footer">Партнерская программа</div>
              <div className="inter-16-footer">Вакансии</div>
            </div>
          </div>
          <div className="menu">
            <div className="inter-14">Меню</div>
            <div
              className="menu-list"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div className="menu-list-elements">
                <div className="inter-16-footer">Расчёт стоимости</div>
                <div className="inter-16-footer">Услуги</div>
                <div className="inter-16-footer">Виджеты</div>
                <div className="inter-16-footer">Интеграции</div>
                <div className="inter-16-footer">Наши клиенты</div>
              </div>
              <div className="menu-list-elements" style={{ marginLeft: 52 }}>
                <div className="inter-16-footer">Кейсы</div>
                <div className="inter-16-footer">Благодарственные письма</div>
                <div className="inter-16-footer">Сертификаты</div>
                <div className="inter-16-footer">Блог на Youtube</div>
                <div className="inter-16-footer">Вопрос / Ответ</div>
              </div>
            </div>
          </div>
          <div className="contacts" style={{ textAlign: "right" }}>
            <div className="inter-14-contacts">Контакты</div>
            <div className="inter-16-footer">+7 555 555-55-55</div>
            <div
              className="icons-footer"
              style={{ marginTop: 24, marginBottom: 22 }}
            >
              <img src={Tgicon} alt="tg icon" style={{ marginRight: 14 }}></img>
              <img
                src={Phoneicon}
                alt="phone icon"
                style={{ marginRight: 14 }}
              ></img>
              <img src={Whatsappicon} alt="whatsapp icon"></img>
            </div>
            <div className="inter-16-footer">
              Москва, Путевой проезд 3с1, к 902
            </div>
            <div className="montserrat-12-footer" style={{ marginTop: 70 }}>
              ©WELBEX 2022. Все права защищены.
            </div>
            <a href="" className="montserrat-12-footer">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
