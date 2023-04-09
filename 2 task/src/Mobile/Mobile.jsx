import Tgicon from "../images/tgicon.png";
import Phoneicon from "../images/phone.png";
import Whatsappicon from "../images/whatsappicon.png";
import "./Mobile.css";

export default function Mobile() {
  return (
    <>
      <div
        className="fix-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: 55,
        }}
      >
        <div
          className="rectangle"
          style={{
            backgroundColor: "#1E1E1E",
            padding: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="inter-12-topmenu">Услуги</div>
          <div className="inter-12-topmenu">Виджеты</div>
          <div className="inter-12-topmenu">Интеграции</div>
          <div className="inter-12-topmenu">Кейсы</div>
        </div>
      </div>
      <div
        className="main-screen"
        style={{
          marginTop: 55,
          width: window.innerWidth,
          paddingTop: 40,
          paddingLeft: 15,
          paddingBottom: 59,
          backgroundColor: "#1A1D23",
        }}
      >
        <div className="purple-light"></div>
        <div className="red-light"></div>
        <div className="purple-ball"></div>
        <div className="red-ball"></div>
        <div className="inter-36">Зарабатывайте больше</div>
        <div className="inter-36-gradient">с WEBEX</div>
        <div className="inter-18">Развиваем и контролируем продажи за вас</div>
        <div className="inter-18-no-letter-spacing">
          Вместе с <span>бесплатной</span>{" "}
          <span className="lessRedGrad">консультацией</span> мы дарим:
        </div>
        <div
          className="benefits"
          style={{ display: "flex", flexDirection: "row", marginTop: 20}}
        >
          <div
            className="benefits-block-one"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="line"></div>
              <div className="montserrat-13">Skype аудит</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="line"></div>
              <div className="montserrat-13">Dashboard</div>
            </div>
          </div>
          <div
            className="benefits-block-two"
            style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="line"></div>
              <div className="montserrat-13">30 виджетов</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="line"></div>
              <div className="montserrat-13">Месяц аmoCRM</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={{
          paddingTop: 41,
          backgroundColor: "#1E1E1E",
          width: window.innerWidth,
          paddingLeft: 15,
        }}
      >
        <div className="about">
          <div className="inter-12-footer">О компании</div>
          <div
            className="about-list"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="inter-14-footer">Партнерская программа</div>
            <div className="inter-14-footer">Вакансии</div>
          </div>
        </div>
        <div className="menu">
          <div className="inter-12-footer">Меню</div>
          <div
            className="menu-list"
            style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}
          >
            <div className="menu-list-elements">
              <div className="inter-14-footer">Расчёт стоимости</div>
              <div className="inter-14-footer">Услуги</div>
              <div className="inter-14-footer">Виджеты</div>
              <div className="inter-14-footer">Интеграции</div>
              <div className="inter-14-footer">Наши клиенты</div>
            </div>
            <div className="menu-list-elements" style={{ marginLeft: 48 }}>
              <div className="inter-14-footer">Благодарность клиентов</div>
              <div className="inter-14-footer">Кейсы</div>
              <div className="inter-14-footer">Сертификаты</div>
              <div className="inter-14-footer">Блог на Youtube</div>
              <div className="inter-14-footer">Вопрос / Ответ</div>
            </div>
          </div>
        </div>
        <div className="contacts">
          <div className="inter-12-footer">Контакты</div>
          <div className="inter-14-footer">+7 555 555-55-55</div>
          <div
            className="icons-footer"
            style={{ marginTop: 11, marginBottom: 12 }}
          >
            <img src={Tgicon} alt="tg icon" style={{ marginRight: 14 }}></img>
            <img
              src={Phoneicon}
              alt="phone icon"
              style={{ marginRight: 14 }}
            ></img>
            <img src={Whatsappicon} alt="whatsapp icon"></img>
          </div>
          <div className="inter-14-footer">
            Москва, Путевой проезд 3с1, к 902
          </div>
          <div className="montserrat-12-footer" style={{ marginTop: 50 }}>
            ©WELBEX 2022. Все права защищены.
          </div>
          <a href="" className="montserrat-12-footer">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </>
  );
}
