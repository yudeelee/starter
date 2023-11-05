'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { Fragment } from 'react';
import Header from '@/components/header/Header';
import Why from '@/components/why/Why';
import Result from '@/components/result/Result';
import Starter from '@/components/starter/Starter';
import '../components/starter/styles.css';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Fragment>
      <Header click={handleClick} />
      <Fragment>
        <div className='why'>
          <div className='whyHeader'>
            <div className='subTitle'>ЧОМУ ТИ</div>
            <div className='title'>ЩЕ НЕ ІНВЕСТУЄШ?</div>
          </div>
          <div className='wrapper'>
            <div className='left'>
              <img src='/img/group1.png' alt='' />
            </div>
            <div className='right'>
              <div className='text'>
                Більшість початківців бояться втратити гроші через
                брак знань і досвіду у сфері інвестицій та створення пасивного
                доходу.
              </div>
              <div className='slog'>
                <span>АЛЕ </span>РІШЕННЯ Є!
              </div>
              <div className='text text1'>4-денний інтенсив</div>
              <div className='littleSlog'>
                <span className='fquot'>ПЕРШІ КРОКИ</span>ДО ФІНАНСОВОЇ
                <span className='bqout'>НЕЗАЛЕЖНОСТІ</span>
              </div>
              <div className='text text2'>
                Як раз і створений для того, щоб допомогти тобі розібратися зі
                своїми фінансами та зібрати свій перший фінансовий портфель,
                який буде давати тобі 10% прибутку на рік.
              </div>
            </div>
          </div>
        </div>
        <div className='result'>
          <div className='resultHeader'>
            <div className='whyHeader'>
              <div className='subTitle'>ЯК</div>
              <div className='title'>РЕЗУЛЬТАТ ІНТЕНСИВА</div>
            </div>
            <div className='container resultBody'>
              <div className='left'>
                <img src='/img/chem.png' alt='' />
              </div>
              <div className='right'>
                <div className='bigText'>
                  <span>Ти отримаєш</span> свій перший інвест-портфель та зробиш
                  перший крок до свободи та пасивного доходу.
                </div>
                <button href='#' className='button' onClick={handleClick}>
                  СТВОРИТИ ІНВЕСТ-ПОРТФЕЛЬ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='forWho'>
          <div className='container'>
            <div className='whyHeader'>
              <div className='subTitle'>ДЛЯ КОГО</div>
              <div className='title'>ПІДІЙДЕ ЦЕЙ ІНТЕНСИВ</div>
            </div>
            <div className='wants'>
              <div className='wItem'>
                <p>
                  <span>Хочеш</span> розібратися зі своїми фінансами та прибрати
                  в них хаос
                </p>
              </div>
              <div className='wItem'>
                <p>
                  <span>Хочеш</span> поставити собі фінансову ціль, та зробити
                  перші кроки для її досягнення
                </p>
              </div>
              <div className='wItem'>
                <p>
                  <span>Хочеш</span> навчитися та розвивати навички інвестування
                  та створити свій перший фінансовий портфель
                </p>
              </div>
            </div>
            <div className='circleWrapper'>
              <div className='circleInner'>
                <div className='circleSmall'></div>
              </div>
              <div className='cirBody'>
                <div className='cirText'>
                  Якщо <span>хоча б один</span> з цих пунктів тобі відгукується,
                  тобі обов'язково потрібно
                </div>
                <div className='cirSlog'>потрапити на інтенсив</div>
                <button className='button' onClick={handleClick}>
                  ЗАЙНЯТИ МІСЦЕ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='program'>
          <div className='container'>
            <div className='whyHeader'>
              <div className='subTitle'>ПРОГРАМА</div>
              <div className='title Yellow'>ІНТЕНСИВУ</div>
            </div>
            <div className='allDay mt4'>
              <div className='lines'>
                <div className='line lineGreen'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
              </div>
              <div className='dayWrapper'>
                <div className='day'>
                  <div className='yellowText center'>День № 1</div>
                </div>
                <div className='yellowTextEx'>
                  Як незалежно від рівня доходу закривати свої фінансові цілі
                </div>
              </div>
              <div className='arrows'>
                <div className='arrItem'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='whiteText'>
                    Проаналізуєш свої фінанси за попередні місяці, знайдеш
                    витоки грошей для інвестування
                  </div>
                </div>
                <div className='arrItem'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='whiteText'>
                    Поставиш свою фінансову ціль і декомпозуєш її на кроки
                  </div>
                </div>
              </div>
            </div>
            <div className='allDay'>
              <div className='lines'>
                <div className='line lineGreen'></div>
                <div className='line lineGreen'></div>
                <div className='line'></div>
                <div className='line'></div>
              </div>
              <div className='dayWrapper'>
                <div className='day'>
                  <div className='yellowText center'>День № 2</div>
                </div>
                <div className='yellowTextEx'>
                  Визначаємо джерело додаткового доходу, яке допоможе досягти
                  своїх цілей
                </div>
              </div>
              <div className='arrows'>
                <div className='arrItem'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='whiteText'>
                    Розрахуєш досягнення своєї фінансової мети за рахунок
                    інвестування на калькуляторі
                  </div>
                </div>
              </div>
            </div>
            <div className='allDay'>
              <div className='lines'>
                <div className='line lineGreen'></div>
                <div className='line lineGreen'></div>
                <div className='line lineGreen'></div>
                <div className='line'></div>
              </div>
              <div className='dayWrapper'>
                <div className='day'>
                  <div className='yellowText center'>День № 3</div>
                </div>
                <div className='yellowTextEx'>Розбір мого інвест-портфелю</div>
              </div>
              <div className='arrows'>
                <div className='arrItem'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='whiteText'>
                    Розбір мого портфеля та з чого все починалось, мій план на
                    2023 - 2024 роки
                  </div>
                </div>
              </div>
            </div>
            <div className='allDay'>
              <div className='lines'>
                <div className='line lineGreen'></div>
                <div className='line lineGreen'></div>
                <div className='line lineGreen'></div>
                <div className='line lineGreen'></div>
              </div>
              <div className='dayWrapper'>
                <div className='day'>
                  <div className='yellowText center'>День № 4</div>
                </div>
                <div className='yellowTextEx'>
                  Працююча схема твого першого інвест портфелю з 10%
                  прибутковістю
                </div>
              </div>
              <div className='arrows'>
                <div className='arrItem'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='whiteText'>
                    Підведення підсумків попередніх днів
                  </div>
                </div>
                <div className='arrItem'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='whiteText'>
                    Покроковий план, як створити свій інвест портфель
                  </div>
                </div>
                <div className='arrItem'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='whiteText'>
                    Готовий інвест портфель з etf фондів, який дасть 10%
                    прибутковості на рік
                  </div>
                </div>
              </div>
            </div>
            <div className='blackBack'>
              <button className='button zin' onClick={handleClick}>
                ЗАЙНЯТИ МІСЦЕ
              </button>
              <img src='/img/seif.png' alt='' className='leftImg' />
              <img src='/img/money.png' alt='' className='rightImg' />
            </div>
          </div>
        </div>
        <div className='coolBon'>
          <div className='container'>
            <div className='whyHeader'>
              <div className='subTitle'>
                А ЯКЩО ТИ ЩЕ ВАГАЄШСЯ ЧИ ПОТРІБНО ТОБІ ЙТИ НА ЦЕЙ ІНТЕНСИВ,
              </div>
              <div className='title'>
                ТО ПОДИВИСЬ НА ЦІ КРУТІ БОНУСИ, ЯКІ Я ПІДГОТУВАЛА ДЛЯ ТЕБЕ
              </div>
            </div>
            <div className='gigGreyBlock mt4'>
              <img src='/img/grey1.png' alt='' />
              <div className='text1'>
                <span className='Big'>Авторська табличка</span>Для розрахунку
                особистих фінансів і фінансів бізнесу, що допоможе навести лад у
                грошах
              </div>
            </div>
            <div className='gigGreyBlock'>
              <img src='/img/grey2.png' alt='' />
              <div className='text1'>
                <span className='Big'>Методика постановки фінансової цілі</span>
              </div>
            </div>
            <div className='gigGreyBlock'>
              <img src='/img/grey3.png' alt='' />
              <div className='text1'>
                <span className='Big'>Калькулятор</span>Для розрахунку свого
                інвестиційного плану
              </div>
            </div>
            <div className='gigGreyBlock'>
              <img src='/img/grey4.png' alt='' />
              <div className='text1'>
                <span className='Big'>Порівняльна таблиця</span>Різних способів
                отримання пасивного доходу, що допоможе обрати найкращий спосіб
                для досягнення своїх цілей
              </div>
            </div>
            <div className='gigGreyBlock'>
              <img src='/img/grey5.png' alt='' />
              <div className='text1'>
                <span className='Big'>Аналіз</span>Реальних інвестиційних
                портфелів інвесторів-початківців і досвідчених інвесторів
              </div>
            </div>
            <div className='blackBonuses'>
              <div className='bunusesText'>
                <div className='bonPrice'>
                  Загальна вартість всіх бонусів 4 990 грн
                </div>
                <div className='bonFree'>
                  але на ти отримаєш їх БЕЗКОШТОВНО на 4-денному інтенсиві
                  “ПЕРШІ КРОКИ ДО ФІНАНСОВОЇ НЕЗАЛЕЖНОСТІ”
                </div>
              </div>
              <div className='buttonWr'>
                <button className='button' onClick={handleClick}>
                  ОБРАТИ ТАРИФ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='tariff' ref={ref}>
          <div className='container'>
            <div className='whyHeader'>
              <div className='subTitle'>ОТЖЕ, ДЛЯ ТЕБЕ</div>
              <div className='title Yellow'>ДОСТУПНІ 2 ТАРИФИ</div>
            </div>
            <div className='tariffs'>
              <div className='tarItem'>
                <div className='tarItemWrapper'>
                  <div className='tarHeader'>
                    <img src='/img/triangle1.png' alt='' />
                    <div className='tarHeaderText'>
                      <div className='tarNName'>Тариф</div>
                      <div className='tarName'>“БАЗОВИЙ”</div>
                    </div>
                  </div>
                  <div className='line'>
                    <img src='/img/line.png' alt='' />
                  </div>
                  <div className='mainProgram'>Основна програма:</div>
                  <div className='arrows'>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Як незалежно від рівня доходу закривати свої фінансові
                        цілі
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Визначаємо джерело додаткового доходу, яке допоможе
                        досягти своїх цілей
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Розбір мого інвест-портфелю
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Працююча схема твого першого інвест портфелю з 10%
                        прибутковістю
                      </div>
                    </div>
                  </div>
                  <div className='arrows pluses'>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        <span>Загальний чат</span> для майбутніх інвесторів, де
                        ви отримаєте підтримку і відповіді на питання від Тетяни
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        Перевірка домашніх завдань <span>куратором</span>
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        Доступ до матеріалів курсу <span>на 1 тижні</span>
                      </div>
                    </div>
                  </div>
                  <div className='blackBonus'>Бонуси, які чекають на тебе:</div>
                  <div className='bunusList'>
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
                        доходу, що допоможе обрати найкращий спосіб для
                        досягнення своїх цілей
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
                <div className='tarFooter'>
                  <div className='price'>
                    <div className='old'>6 980 ₴</div>
                    <div className='new'>1 980 ₴</div>
                  </div>
                  <div className='button'>ОБРАТИ ТАРИФ</div>
                  <div className='tarStar'>
                    <span>*</span> І це твоя перша інвестиція в себе
                  </div>
                </div>
              </div>
              <div className='tarItem'>
                <div className='tarItemWrapper'>
                  <div className='tarHeader'>
                    <img src='/img/tar2.png' alt='' />
                    <div className='tarHeaderText'>
                      <div className='tarNName'>Тариф</div>
                      <div className='tarName'>“ХОДІМО РАЗОМ”</div>
                    </div>
                  </div>
                  <div className='line'>
                    <img src='/img/line.png' alt='' />
                  </div>
                  <div className='mainProgram'>Основна програма:</div>
                  <div className='arrows'>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Як незалежно від рівня доходу закривати свої фінансові
                        цілі
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Визначаємо джерело додаткового доходу, яке допоможе
                        досягти своїх цілей
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Розбір мого інвест-портфелю
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/triangle.png' alt='' />
                      <div className='whiteText'>
                        Працююча схема твого першого інвест портфелю з 10%
                        прибутковістю
                      </div>
                    </div>
                  </div>
                  <div className='arrows pluses'>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        <span>Загальний чат</span> для майбутніх інвесторів, де
                        ви отримаєте підтримку і відповіді на питання від Тетяни
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        Перевірка домашніх завдань <span>куратором</span>
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        Доступ до матеріалів курсу <span>на 2 тижні</span>
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        <span>Стратегічна сесія з Тетяною</span> по досягненню
                        твоїх фінансових цілей через інвестування і створенню
                        власного інвестиційного портфелю
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        Додаткові <span>2 варіанти</span> готових інвест
                        портфелей
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        Додаткові <span>2 варіанти</span> готових інвест
                        портфелей
                      </div>
                    </div>
                    <div className='arrItem'>
                      <img src='/img/plus.png' alt='' />
                      <div className='whiteText'>
                        <span>1 тиждень чату</span> підтримки і зворотного
                        зв’язку  від Тетяни
                      </div>
                    </div>
                  </div>
                  <div className='blackBonus'>Бонуси, які чекають на тебе:</div>
                  <div className='bunusList'>
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
                        доходу, що допоможе обрати найкращий спосіб для
                        досягнення своїх цілей
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
                <div className='tarFooter'>
                  <div className='price'>
                    <div className='old'>8 790 ₴</div>
                    <div className='new'>3 800 ₴</div>
                  </div>
                  <div className='button'>ОБРАТИ ТАРИФ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='athor'>
          <div className='container'>
            <div className='athorWrapper'>
              <div className='left'>
                <div className='aHeader small'>
                  <div className='awho'>
                    Автор курсу <span>PROOF INVESTOR</span>
                  </div>
                  <div className='aName'>ТЕТЯНА</div>
                  <div className='aName'>СЕЛЕЗНЬОВА</div>
                </div>
                <img src='/img/Tania1.png' alt='' />
              </div>
              <div className='right'>
                <div className='aHeader big'>
                  <div className='awho'>
                    Автор курсу <span>PROOF INVESTOR</span>
                  </div>
                  <div className='aName'>ТЕТЯНА</div>
                  <div className='aName'>СЕЛЕЗНЬОВА</div>
                </div>
                <div className='dots'>
                  <div className='dot'>
                    <img src='/img/dot.png' alt='' />
                    <div className='dotText'>
                      Діючий підприємець <span>з 2020 року</span> з оборотом
                      бізнесу
                      <span>$9 000+</span>
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='/img/dot.png' alt='' />
                    <div className='dotText'>
                      <span>Власник компанії</span> та торговельної марки
                      бухгалтерських послуг <span>БУХГАЛТЕР-КОНСУЛЬТАНТ</span>
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='/img/dot.png' alt='' />
                    <div className='dotText'>
                      <span>Більше 100</span> підприємців України на
                      бухгалтерському та фінансовому супроводі
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='/img/dot.png' alt='' />
                    <div className='dotText'>
                      <span>Інвестор-практик</span> з капіталом
                      <span>$31’500+</span> на фондовому ринку
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='/img/dot.png' alt='' />
                    <div className='dotText'>
                      <span>Куратор та спікер</span> онлайн-школи Turbo.ZNO по
                      темі фінансів та інвестування
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='theTime'>
          <div className='container'>
            <div className='theWrapper'>
              <div className='title left'>Зараз саме той час</div>
              <div className='chois mt24'>
                щоб замислитися про своє майбутнє, та зробити правильний вибір
              </div>
              <div className='imgWr small'>
                <img src='/img/time.png' alt='' />
              </div>
              <div className='btnwr'>
                <button className='button mt4' onClick={handleClick}>
                  ПРИЄДНАТИСЯ ДО ІНТЕНСИВУ
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className='footer'>
          <div className='container'>
            <div className='footerWrapper'>
              <div className='footerBlock'>
                <div className='lightText1'>
                  <span>ФІЗИЧНА ОСОБА ПІДПРИЄМЕЦЬ</span>СЕЛЕЗНЬОВА ТЕТЯНА
                  ОЛЕКСІЇВНА
                </div>
              </div>
              <div className='footerBlock'>
                <div className='lightText1'>
                  <span>Адреса реєстрації:</span>Україна, 79022, Львівська обл.,
                  місто Львів, вулиця Городоцька, будинок 289, квартира 26.
                </div>
              </div>
              <div className='footerBlock'>
                <div className='lightText1'>
                  <span>РНОКПП:</span>3462107523
                </div>
              </div>
              <div className='footerBlock'>
                <div className='lightText1'>
                  <span>Банківські реквізити:</span>IBAN
                  UA443052990000026005011012234 в АТ КБ "ПРИВАТБАНК"
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className='privacy'>
          <a
            href='https://starter-nine-olive.vercel.app/privacypolicy'
            className='priv'
          >
            Політика конфіденційності
          </a>
          <a
            href='https://starter-nine-olive.vercel.app/publicoffer'
            className='priv'
          >
            Публічна оферта
          </a>
        </div>
      </Fragment>
    </Fragment>
  );
}
