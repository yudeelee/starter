import { Fragment } from 'react';
import './styles.css';

const Starter = () => {
  return (
    <Fragment>
      <div class='why'>
        <div class='whyHeader'>
          <div class='subTitle'>ЧОМУ ТИ</div>
          <div class='title'>ЩЕ НЕ ІНВЕСТУЄШ?</div>
        </div>
        <div class='wrapper'>
          <div class='left'>
            <img src='/img/group1.png' alt='' />
          </div>
          <div class='right'>
            <div class='text'>
              Більшість початківців попросту бояться втратити гроші, через брак
              знань і досвіду у сфері інвестицій та створення пасивного доходу.
            </div>
            <div class='slog'>
              <span>АЛЕ</span>Є РІШЕННЯ!
            </div>
            <div class='text text1'>4-денний інтенсив</div>
            <div class='littleSlog'>
              <span class='fquot'>ПЕРШІ КРОКИ</span>ДО ФІНАНСОВОЇ
              <span class='bqout'>НЕЗАЛЕЖНОСТІ</span>
            </div>
            <div class='text text2'>
              Як раз і створений для того, щоб допомогти тобі розібратися зі
              своїми фінансами та зібрати свій перший фінансовий портфель, який
              буде давати тобі 10% прибутку на рік.
            </div>
          </div>
        </div>
      </div>
      <div class='result'>
        <div class='resultHeader'>
          <div class='whyHeader'>
            <div class='subTitle'>ЯК</div>
            <div class='title'>РЕЗУЛЬТАТ ІНТЕНСИВА</div>
          </div>
          <div class='container resultBody'>
            <div class='left'>
              <img src='/img/chem.png' alt='' />
            </div>
            <div class='right'>
              <div class='bigText'>
                <span>Ти отримаєш</span> свій перший інвест-портфель та зробиш
                перший крок до свободи та пасивного доходу.
              </div>
              <a href='#' class='button'>
                СТВОРИТИ ІНВЕСТ-ПОРТФЕЛЬ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class='forWho'>
        <div class='container'>
          <div class='whyHeader'>
            <div class='subTitle'>ДЛЯ КОГО</div>
            <div class='title'>ПІДІЙДЕ ЦЕЙ ІНТЕНСИВ</div>
          </div>
          <div class='wants'>
            <div class='wItem'>
              <p>
                <span>Хочеш</span> розібратися зі своїми фінансами та прибрати в
                них хаос
              </p>
            </div>
            <div class='wItem'>
              <p>
                <span>Хочеш</span> поставити собі фінансову ціль, та зробити
                перші кроки для її досягнення
              </p>
            </div>
            <div class='wItem'>
              <p>
                <span>Хочеш</span> навчитися та розвивати навички інвестування
                та створити свій перший фінансовий портфель
              </p>
            </div>
          </div>
          <div class='circleWrapper'>
            <div class='circleInner'>
              <div class='circleSmall'></div>
            </div>
            <div class='cirBody'>
              <div class='cirText'>
                Якщо <span>хоча б один</span> з цих пунктів тобі відгукується,
                тобі обов'язково потрібно
              </div>
              <div class='cirSlog'>потрапити на інтенсив</div>
              <div class='button'>ЗАЙНЯТИ МІСЦЕ</div>
            </div>
          </div>
        </div>
      </div>
      <div class='program'>
        <div class='container'>
          <div class='whyHeader'>
            <div class='subTitle'>ПРОГРАМА</div>
            <div class='title Yellow'>ІНТЕНСИВУ</div>
          </div>
          <div class='allDay mt4'>
            <div class='lines'>
              <div class='line lineGreen'></div>
              <div class='line'></div>
              <div class='line'></div>
              <div class='line'></div>
            </div>
            <div class='dayWrapper'>
              <div class='day'>
                <div class='yellowText center'>День № 1</div>
              </div>
              <div class='yellowTextEx'>
                Як незалежно від рівня доходу закривати свої фінансові цілі
              </div>
            </div>
            <div class='arrows'>
              <div class='arrItem'>
                <img src='/img/triangle.png' alt='' />
                <div class='whiteText'>
                  Проаналізуєш свої фінанси за попередні місяці, знайдеш витоки
                  грошей для інвестування
                </div>
              </div>
              <div class='arrItem'>
                <img src='/img/triangle.png' alt='' />
                <div class='whiteText'>
                  Поставиш свою фінансову ціль і декомпозуєш її на кроки
                </div>
              </div>
            </div>
          </div>
          <div class='allDay'>
            <div class='lines'>
              <div class='line lineGreen'></div>
              <div class='line lineGreen'></div>
              <div class='line'></div>
              <div class='line'></div>
            </div>
            <div class='dayWrapper'>
              <div class='day'>
                <div class='yellowText center'>День № 2</div>
              </div>
              <div class='yellowTextEx'>
                Визначаємо джерело додаткового доходу, яке допоможе досягти
                своїх цілей
              </div>
            </div>
            <div class='arrows'>
              <div class='arrItem'>
                <img src='/img/triangle.png' alt='' />
                <div class='whiteText'>
                  Розрахуєш досягнення своєї фінансової мети за рахунок
                  інвестування на калькуляторі
                </div>
              </div>
            </div>
          </div>
          <div class='allDay'>
            <div class='lines'>
              <div class='line lineGreen'></div>
              <div class='line lineGreen'></div>
              <div class='line lineGreen'></div>
              <div class='line'></div>
            </div>
            <div class='dayWrapper'>
              <div class='day'>
                <div class='yellowText center'>День № 3</div>
              </div>
              <div class='yellowTextEx'>Розбір мого інвест-портфелю</div>
            </div>
            <div class='arrows'>
              <div class='arrItem'>
                <img src='/img/triangle.png' alt='' />
                <div class='whiteText'>
                  Розбір мого портфеля та з мого все починалось, мій план на
                  2023 - 2024 роки
                </div>
              </div>
            </div>
          </div>
          <div class='allDay'>
            <div class='lines'>
              <div class='line lineGreen'></div>
              <div class='line lineGreen'></div>
              <div class='line lineGreen'></div>
              <div class='line lineGreen'></div>
            </div>
            <div class='dayWrapper'>
              <div class='day'>
                <div class='yellowText center'>День № 4</div>
              </div>
              <div class='yellowTextEx'>
                Працююча схема твого першого інвест портфелю з 10% прибутковістю
              </div>
            </div>
            <div class='arrows'>
              <div class='arrItem'>
                <img src='/img/triangle.png' alt='' />
                <div class='whiteText'>
                  Підведення підсумків попередніх днів
                </div>
              </div>
              <div class='arrItem'>
                <img src='/img/triangle.png' alt='' />
                <div class='whiteText'>
                  Покроковий план, як створити свій інвест портфель
                </div>
              </div>
              <div class='arrItem'>
                <img src='/img/triangle.png' alt='' />
                <div class='whiteText'>
                  Готовий інвест портфель з etf фондів, який дасть 10%
                  прибутковості на рік
                </div>
              </div>
            </div>
          </div>
          <div class='blackBack'>
            <div class='button zin'>ЗАЙНЯТИ МІСЦЕ</div>
            <img src='/img/seif.png' alt='' class='leftImg' />
            <img src='/img/money.png' alt='' class='rightImg' />
          </div>
        </div>
      </div>
      <div class='coolBon'>
        <div class='container'>
          <div class='whyHeader'>
            <div class='subTitle'>
              А ЯКЩО ТИ ЩЕ ВАГАЄШСЯ ЧИ ПОТРІБНО ТОБІ ЙТИ НА ЦЕЙ ІНТЕНСИВ,
            </div>
            <div class='title'>
              ТО ПОДИВИСЬ НА ЦІ КРУТІ БОНУСИ, ЯКІ Я ПІДГОТУВАЛА ДЛЯ ТЕБЕ
            </div>
          </div>
          <div class='gigGreyBlock mt4'>
            <img src='/img/grey1.png' alt='' />
            <div class='text1'>
              <span class='Big'>Авторська табличка</span>Для розрахунку
              особистих фінансів і фінансів бізнесу, що допоможе навести лад у
              грошах
            </div>
          </div>
          <div class='gigGreyBlock'>
            <img src='/img/grey2.png' alt='' />
            <div class='text1'>
              <span class='Big'>Методика постановки фінансової цілі</span>
            </div>
          </div>
          <div class='gigGreyBlock'>
            <img src='/img/grey3.png' alt='' />
            <div class='text1'>
              <span class='Big'>Калькулятор</span>Для розрахунку свого
              інвестиційного плану
            </div>
          </div>
          <div class='gigGreyBlock'>
            <img src='/img/grey4.png' alt='' />
            <div class='text1'>
              <span class='Big'>Порівняльна таблиця</span>Різних способів
              отримання пасивного доходу, що допоможе обрати найкращий спосіб
              для досягнення своїх цілей
            </div>
          </div>
          <div class='gigGreyBlock'>
            <img src='/img/grey5.png' alt='' />
            <div class='text1'>
              <span class='Big'>Аналіз</span>Реальних інвестиційних портфелів
              інвесторів-початківців і досвідчених інвесторів
            </div>
          </div>
          <div class='blackBonuses'>
            <div class='bunusesText'>
              <div class='bonPrice'>
                Загальна вартість всіх бонусів 4 990 грн
              </div>
              <div class='bonFree'>
                але на ти отримаєш їх БЕЗКОШТОВНО на 4-денному інтенсиві “ПЕРШІ
                КРОКИ ДО ФІНАНСОВОЇ НЕЗАЛЕЖНОСТІ”
              </div>
            </div>
            <div class='buttonWr'>
              <div class='button'>ОБРАТИ ТАРИФ</div>
            </div>
          </div>
        </div>
      </div>
      <div class='tariff'>
        <div class='container'>
          <div class='whyHeader'>
            <div class='subTitle'>ОТЖЕ, ДЛЯ ТЕБЕ</div>
            <div class='title Yellow'>ДОСТУПНІ 2 ТАРИФИ</div>
          </div>
          <div class='tariffs'>
            <div class='tarItem'>
              <div class='tarItemWrapper'>
                <div class='tarHeader'>
                  <img src='/img/triangle1.png' alt='' />
                  <div class='tarHeaderText'>
                    <div class='tarNName'>Тариф</div>
                    <div class='tarName'>“БАЗОВИЙ”</div>
                  </div>
                </div>
                <div class='line'>
                  <img src='/img/line.png' alt='' />
                </div>
                <div class='mainProgram'>Основна програма:</div>
                <div class='arrows'>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>
                      Як незалежно від рівня доходу закривати свої фінансові
                      цілі
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>
                      Визначаємо джерело додаткового доходу, яке допоможе
                      досягти своїх цілей
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>Розбір мого інвест-портфелю</div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>
                      Працююча схема твого першого інвест портфелю з 10%
                      прибутковістю
                    </div>
                  </div>
                </div>
                <div class='arrows pluses'>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      <span>Загальний чат</span> для майбутніх інвесторів, де ви
                      отримаєте підтримку і відповіді на питання від Тетяни
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      Перевірка домашніх завдань <span>куратором</span>
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      Доступ до матеріалів курсу <span>на 1 тижні</span>
                    </div>
                  </div>
                </div>
                <div class='blackBonus'>Бонуси, які чекають на тебе:</div>
                <div class='bunusList'>
                  <ul>
                    <li>
                      Авторська табличка для розрахунку особистих фінансів і
                      фінансів бізнесу, що допоможе навести лад у грошах
                    </li>
                    <li>Методика постановки фінансової цілі</li>
                    <li>
                      Калькулятор для розрахунку свого інвестиційного плану
                    </li>
                    <li>
                      Порівняльна таблиця різних способів отримання пасивного
                      доходу, що допоможе обрати найкращий спосіб для досягнення
                      своїх цілей
                    </li>
                    <li>
                      Аналіз реальних інвестиційних портфелів
                      інвесторів-початківців і досвідчених інвесторів
                    </li>
                    <li>
                      Готова покрокова схема побудови вашого першого
                      інвестиційного портфелю
                    </li>
                  </ul>
                </div>
              </div>
              <div class='tarFooter'>
                <div class='price'>
                  <div class='old'>6 980 ₴</div>
                  <div class='new'>1 980 ₴</div>
                </div>
                <div class='button'>ОБРАТИ ТАРИФ</div>
                <div class='tarStar'>
                  <span>*</span> І це твоя перша інвестиція в себе
                </div>
              </div>
            </div>
            <div class='tarItem'>
              <div class='tarItemWrapper'>
                <div class='tarHeader'>
                  <img src='/img/tar2.png' alt='' />
                  <div class='tarHeaderText'>
                    <div class='tarNName'>Тариф</div>
                    <div class='tarName'>“ХОДІМО РАЗОМ”</div>
                  </div>
                </div>
                <div class='line'>
                  <img src='/img/line.png' alt='' />
                </div>
                <div class='mainProgram'>Основна програма:</div>
                <div class='arrows'>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>
                      Як незалежно від рівня доходу закривати свої фінансові
                      цілі
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>
                      Визначаємо джерело додаткового доходу, яке допоможе
                      досягти своїх цілей
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>Розбір мого інвест-портфелю</div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/triangle.png' alt='' />
                    <div class='whiteText'>
                      Працююча схема твого першого інвест портфелю з 10%
                      прибутковістю
                    </div>
                  </div>
                </div>
                <div class='arrows pluses'>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      <span>Загальний чат</span> для майбутніх інвесторів, де ви
                      отримаєте підтримку і відповіді на питання від Тетяни
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      Перевірка домашніх завдань <span>куратором</span>
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      Доступ до матеріалів курсу <span>на 2 тижні</span>
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      <span>Стратегічна сесія з Тетяною</span> по досягненню
                      твоїх фінансових цілей через інвестування і створенню
                      власного інвестиційного портфелю
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      Додаткові <span>2 варіанти</span> готових інвест портфелей
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      Додаткові <span>2 варіанти</span> готових інвест портфелей
                    </div>
                  </div>
                  <div class='arrItem'>
                    <img src='/img/plus.png' alt='' />
                    <div class='whiteText'>
                      <span>1 тиждень чату</span> підтримки і зворотного
                      зв’язку  від Тетяни
                    </div>
                  </div>
                </div>
                <div class='blackBonus'>Бонуси, які чекають на тебе:</div>
                <div class='bunusList'>
                  <ul>
                    <li>
                      Авторська табличка для розрахунку особистих фінансів і
                      фінансів бізнесу, що допоможе навести лад у грошах
                    </li>
                    <li>Методика постановки фінансової цілі</li>
                    <li>
                      Калькулятор для розрахунку свого інвестиційного плану
                    </li>
                    <li>
                      Порівняльна таблиця різних способів отримання пасивного
                      доходу, що допоможе обрати найкращий спосіб для досягнення
                      своїх цілей
                    </li>
                    <li>
                      Аналіз реальних інвестиційних портфелів
                      інвесторів-початківців і досвідчених інвесторів
                    </li>
                    <li>
                      Готова покрокова схема побудови вашого першого
                      інвестиційного портфелю
                    </li>
                  </ul>
                </div>
              </div>
              <div class='tarFooter'>
                <div class='price'>
                  <div class='old'>8 790 ₴</div>
                  <div class='new'>3 800 ₴</div>
                </div>
                <div class='button'>ОБРАТИ ТАРИФ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='athor'>
        <div class='container'>
          <div class='athorWrapper'>
            <div class='left'>
              <div class='aHeader small'>
                <div class='awho'>
                  Автор курсу <span>PROOF INVESTOR</span>
                </div>
                <div class='aName'>ТЕТЯНА</div>
                <div class='aName'>СЕЛЕЗНЬОВА</div>
              </div>
              <img src='/img/Tania1.png' alt='' />
            </div>
            <div class='right'>
              <div class='aHeader big'>
                <div class='awho'>
                  Автор курсу <span>PROOF INVESTOR</span>
                </div>
                <div class='aName'>ТЕТЯНА</div>
                <div class='aName'>СЕЛЕЗНЬОВА</div>
              </div>
              <div class='dots'>
                <div class='dot'>
                  <img src='/img/dot.png' alt='' />
                  <div class='dotText'>
                    Діючий підприємець <span>з 2020 року</span> з оборотом
                    бізнесу
                    <span>$9 000+</span>
                  </div>
                </div>
                <div class='dot'>
                  <img src='/img/dot.png' alt='' />
                  <div class='dotText'>
                    <span>Власник компанії</span> та торговельної марки
                    бухгалтерських послуг <span>БУХГАЛТЕР-КОНСУЛЬТАНТ</span>
                  </div>
                </div>
                <div class='dot'>
                  <img src='/img/dot.png' alt='' />
                  <div class='dotText'>
                    <span>Більше 100</span> підприємців України на
                    бухгалтерському та фінансовому супроводі
                  </div>
                </div>
                <div class='dot'>
                  <img src='/img/dot.png' alt='' />
                  <div class='dotText'>
                    <span>Інвестор-практик</span> з капіталом
                    <span>$31’500+</span> на фондовому ринку
                  </div>
                </div>
                <div class='dot'>
                  <img src='/img/dot.png' alt='' />
                  <div class='dotText'>
                    <span>Куратор та спікер</span> онлайн-школи Turbo.ZNO по
                    темі фінансів та інвестування
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='theTime'>
        <div class='container'>
          <div class='theWrapper'>
            <div class='title left'>Зараз саме той час</div>
            <div class='chois mt24'>
              щоб замислитися про своє майбутнє, та зробити правильний вибір
            </div>
            <div class='imgWr small'>
              <img src='/img/time.png' alt='' />
            </div>
            <div class='btnwr'>
              <div class='button mt4'>ПРИЄДНАТИСЯ ДО ІНТЕНСИВУ</div>
            </div>
          </div>
        </div>
      </div>
      <footer class='footer'>
        <div class='container'>
          <div class='footerWrapper'>
            <div class='footerBlock'>
              <div class='lightText1'>
                <span>ФІЗИЧНА ОСОБА ПІДПРИЄМЕЦЬ</span>СЕЛЕЗНЬОВА ТЕТЯНА
                ОЛЕКСІЇВНА
              </div>
            </div>
            <div class='footerBlock'>
              <div class='lightText1'>
                <span>Адреса реєстрації:</span>Україна, 79022, Львівська обл.,
                місто Львів, вулиця Городоцька, будинок 289, квартира 26.
              </div>
            </div>
            <div class='footerBlock'>
              <div class='lightText1'>
                <span>РНОКПП:</span>3462107523
              </div>
            </div>
            <div class='footerBlock'>
              <div class='lightText1'>
                <span>Банківські реквізити:</span>IBAN
                UA443052990000026005011012234 в АТ КБ "ПРИВАТБАНК"
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Starter;
