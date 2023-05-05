import Welbexicon from "../images/Welbexicon.png";
import Welbexicontext from "../images/Welbexicontext.png";
import Tgicon from "../images/tgicon.png";
import Phoneicon from "../images/phone.png";
import Whatsappicon from "../images/whatsappicon.png";
import "./Desktop.css";

export default function Desktop() {
  return (
    <div
      className="main-block">
      <div className="purple-light"></div>
      <div className="red-light"></div>
      <div className="purple-ball"></div>
      <div className="red-ball"></div>
      <div className="red-ball-mini"></div>
      <div className="content">
        <div className="header">
          <div className="logo-description">
            <div className="logo-webex">
              <img src={Welbexicon} alt="Welbex icon"></img>
              <img
                src={Welbexicontext}
                alt="Welbex icon text"
                style={{ marginLeft: 8, marginBottom: 5 }}
              ></img>
            </div>
            <div className="montserrat logo-text">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
          </div>
          <div className="menu-important">
            <div className="inter text-menu-first">Услуги</div>
            <div className="inter text-menu">Виджеты</div>
            <div className="inter text-menu">Интеграции</div>
            <div className="inter text-menu">Кейсы</div>
            <div className="inter text-menu">Сертификаты</div>
          </div>
          <div className="inter phone">+7 555 555-55-55</div>
          <div className="refs">
            <img src={Tgicon} alt="tg icon"></img>
            <img
              src={Phoneicon}
              alt="phone icon"
              style={{ marginLeft: "28.3%" }}
            ></img>
            <img
              src={Whatsappicon}
              alt="whatsapp icon"
              style={{ marginLeft: "28.3%" }}
            ></img>
          </div>
        </div>
        <div className="main-text">
          <div className="motivation-text">
            <div className="inter big-text">Зарабатывайте больше</div>
            <div className="big-text-gradient">с WELBEX</div>
            <div className="montserrat motivation-text-description">
              Развиваем и контролируем продажи за вас
            </div>
          </div>
          <div className="benefits">
            <div className="inter benefits-main-text">
              Вместе с <span className="gradient-text">бесплатной</span>{" "}
              <span className="gradient-text">консультацией</span> мы дарим:
            </div>
            <div className="benefits-box top-box">
              <div className="left-box">
                <div className="inter box-text-header">ВИДЖЕТЫ</div>
                <div className="montserrat box-text-content">30 готовых решений</div>
              </div>
              <div className="right-box">
                <div className="inter box-text-header">DASHBOARD</div>
                <div className="montserrat box-text-content">
                  с показателями вашего бизнеса
                </div>
              </div>
            </div>
            <div className="benefits-box bot-box">
              <div className="left-box">
                <div className="inter box-text-header">SKYPE АУДИТ</div>
                <div className="montserrat box-text-content">отдела продаж и CRM системы</div>
              </div>
              <div className="right-box">
                <div className="inter box-text-header">35 ДНЕЙ</div>
                <div className="montserrat box-text-content">использования CRM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-zone">
          <button className="get-button">
            <span className="inter get-button-text">Получить консультацию</span>
          </button>
        </div>
        <div className="footer">
          <div className="about-block">
            <div className="inter footer-text-header about">О компании</div>
            <div className="about-list">
              <div className="inter footer-text-content">Партнерская программа</div>
              <div className="inter footer-text-content">Вакансии</div>
            </div>
          </div>
          <div className="menu-block">
            <div className="inter footer-text-header menu">Меню</div>
            <div className="menu-list">
              <div className="menu-list-elements-left">
                <div className="inter footer-text-content">Расчёт стоимости</div>
                <div className="inter footer-text-content">Услуги</div>
                <div className="inter footer-text-content">Виджеты</div>
                <div className="inter footer-text-content">Интеграции</div>
                <div className="inter footer-text-content">Наши клиенты</div>
              </div>
              <div className="menu-list-elements-right">
                <div className="inter footer-text-content">Кейсы</div>
                <div className="inter footer-text-content">Благодарственные письма</div>
                <div className="inter footer-text-content">Сертификаты</div>
                <div className="inter footer-text-content">Блог на Youtube</div>
                <div className="inter footer-text-content">Вопрос / Ответ</div>
              </div>
            </div>
          </div>
          <div className="contacts-block">
            <div className="inter footer-text-header contacts">Контакты</div>
            <div className="inter footer-text-content">+7 555 555-55-55</div>
            <div className="icons-footer">
              <img src={Tgicon} alt="tg icon" style={{ marginRight: 14 }}></img>
              <img
                src={Phoneicon}
                alt="phone icon"
                style={{ marginRight: 14 }}
              ></img>
              <img src={Whatsappicon} alt="whatsapp icon"></img>
            </div>
            <div className="inter footer-text-content">
              Москва, Путевой проезд 3с1, к 902
            </div>
            <div className="montserrat footer-text-rights-policy rights">
              ©WELBEX 2022. Все права защищены.
            </div>
            <a href="" className="montserrat footer-text-rights-policy">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
