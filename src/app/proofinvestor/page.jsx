'use client';

import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

const page = () => {
  return (
    <Fragment>
      <header className='header'>
        <div className='container'>
          <div className='top'>
            <div className='labelTop'>
              <span>21-денна &nbsp;</span> програма по інвестиціям
            </div>
          </div>
          <div className='text headerSmText'>
            Створи за 3 тижні свій інвестиційний портфель, який буде приносити
            від
            <span>$1`000</span> щомісяця
          </div>
          <div className='yellowText'>
            і план розвитку на наступні 10 років життя
          </div>
          <div className='blackBlock'>
            <div className='lightText'>
              <span>Завдяки</span> нашим інвестиційним стратегіям
            </div>
          </div>
          <div className='buttonWrapper'>
            <a href='' className='button'>
              ХОЧУ ПОЧАТИ ІНВЕСТУВАТИ 
            </a>
          </div>
        </div>
      </header>
      <div className='contains'>
        <div className='container'>
          <div className='conHeader'>
            <div className='whiteText'>
              З чого складається інвестиційний портфель,
            </div>
            <div className='title mt'>
              який забезпечить фінансову стабільність для тебе і твоєї сім'ї?
            </div>
          </div>
        </div>
        <div className='conBody mt2'>
          <div className='container'>
            <div className='conBodyWrapper'>
              <div className='left'>
                <div className='lightText'>Забезпеч своє майбутнє разом з</div>
                <div className='yellowSmallText'>PROOF INVESTOR</div>
              </div>
              <div className='right'>
                <div className='containeItem'>
                  <span>Успішний портфель</span> складається з різнопланових
                  активів: etf фондів, акцій окремих компаній та облігацій
                  (бондів);
                </div>
                <div className='containeItem'>
                  <span>Збалансований</span> та
                  <span>диверсифікований</span> галузях економіки, географії;
                </div>
                <div className='containeItem'>
                  <span>Враховувати</span> часові рамки інвестування
                </div>
                <div className='containeItem'>
                  <span>Повинен</span> відповідати твоїй стратегії інвестування;
                </div>
                <div className='containeItem'>
                  <span>A найголовніше</span> твоїм фінансовим цілям
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='buttonWrapper'>
            <a href='' className='button'>
              Ласкаво прошу до світу інвестицій 
            </a>
          </div>
        </div>
      </div>
      <div className='contains mt14'>
        <div className='container'>
          <div className='conHeader'>
            <div className='whiteText'>Що ти отримаєш</div>
            <div className='title mt'>за 21 день?</div>
          </div>
          <div className='youwillget'>
            <div className='getItem'>
              <div className='getIcon'>
                <img src='/img/ico1.png' alt='' />
              </div>
              <div className='getText'>
                Можливість інвестувати та створити свій пасивний дохід
              </div>
            </div>
            <div className='getItem'>
              <div className='getIcon'>
                <img src='/img/ico2.png' alt='' />
              </div>
              <div className='getText'>
                Інвестиційні стратегії, які забезпечать фінансову свободу твою
                та твоєї сім'ї
              </div>
            </div>
            <div className='getItem'>
              <div className='getIcon'>
                <img src='/img/ico3.png' alt='' />
              </div>
              <div className='getText'>
                Чіткий план досягнення всіх фінансових цілей на найближчі 10
                років
              </div>
            </div>
            <div className='getItem'>
              <div className='getIcon'>
                <img src='/img/ico4.png' alt='' />
              </div>
              <div className='getText'>
                Навчишся аналізувати цінні папери та приймати правильні
                інвестиційні рішення
              </div>
            </div>
            <div className='getItem'>
              <div className='getIcon'>
                <img src='/img/ico5.png' alt='' />
              </div>
              <div className='getText'>
                Консультувати інших у сфері фінансів та інвестицій
              </div>
            </div>
          </div>
        </div>
        <div className='buttonWrapper'>
          <a href='' className='button'>
            ОБРАТИ ВАРІАНТ УЧАСТІ
          </a>
        </div>
      </div>
      <div className='program mt14'>
        <div className='container'>
          <div className='progHeader'>
            <div className='whiteText'>21-денна</div>
            <div className='titleYellow mt'>програма</div>
          </div>
          <div className='lines'>
            <div className='line lineGreen'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='week'>Тиждень №1</div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 1.</div>
            <div className='lesBody'>
              Правила управління грошима. Формуємо свій капітал.
            </div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 2.</div>
            <div className='lesBody'>
              Постановка фін. цілей на 10 років вперед
            </div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 3.</div>
            <div className='lesBody'>Введення в світ інвестицій</div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 4.</div>
            <div className='lesBody'>Брокери. Як обрати надійного</div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 5.</div>
            <div className='lesBody'>
              Керівництво користування платформою брокера
            </div>
          </div>
          <div className='result'>
            <img src='/img/Pin.png' alt='' />
            <div className='resHeader'>Результат:</div>
            <div className='resBody'>
              Зрозумієте як управляти фінансами та що потрібно робити, щоб
              примножувати ваші заощадження. Дізнаєтесь, як влаштований
              фінансовий ринок, як отримати до нього доступ та як обрати
              надійного брокера, якому можна довіряти. Отримаєте повну
              інструкцію користування платформою брокера.
            </div>
          </div>
          <div className='lines'>
            <div className='line lineGreen'></div>
            <div className='line lineGreen'></div>
            <div className='line'></div>
          </div>
          <div className='week'>Тиждень №2</div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 6.</div>
            <div className='lesBody'>
              Технічний аналіз. Як розуміти графіки.
            </div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 7.</div>
            <div className='lesBody'>Фундаментальний аналіз. Новини.</div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 8.</div>
            <div className='lesBody'>Аналіз акцій</div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 9.</div>
            <div className='lesBody'>Аналіз ETF фондів</div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 10.</div>
            <div className='lesBody'>
              Стратегії інвестування (дивідендна, зростаюча, агресивна, помірна,
              концервативна, короткострокова, довгострокова, пасивна, активна)
            </div>
          </div>
          <div className='result'>
            <img src='/img/Pin.png' alt='' />
            <div className='resHeader'>Результат:</div>
            <div className='resBody'>
              Отримаєте практичний досвід аналізу активів для інвестування та
              навчитесь підбирати стратегію інвестування в залежності від ваших
              цілей.
            </div>
          </div>
          <div className='lines'>
            <div className='line lineGreen'></div>
            <div className='line lineGreen'></div>
            <div className='line lineGreen'></div>
          </div>
          <div className='week'>Тиждень №3</div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 11.</div>
            <div className='lesBody'>Психологія інвестора (Баффет)</div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 12.</div>
            <div className='lesBody'>
              Вибір власної стратегії інвестування. Формуємо портфель.
            </div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 13.</div>
            <div className='lesBody'>
              Поповнення рахунку брокер. Купівля першого цінного активу
            </div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 14.</div>
            <div className='lesBody'>
              Як аналізувати свій портфель.Ребаланс портфеля. Аналіз звітності у
              брокера.
            </div>
          </div>
          <div className='lesson'>
            <div className='lesHeader'>Урок 15.</div>
            <div className='lesBody'>
              Звітність в Україні по інвест доходам.
            </div>
          </div>
          <div className='result'>
            <img src='/img/Pin.png' alt='' />
            <div className='resHeader'>Результат:</div>
            <div className='resBody'>
              Сформуєте власний інвестиційний портфель, який в реальному часі
              буде працювати на примноження вашого капіталу. Отримаєте план
              подальших дій для аналізу та ребалансу портфелю. Зрозумієте як
              оподатковувати та працювати з інвестиційним прибутком та
              дивідендами в Україні.
            </div>
          </div>
          <div className='buttonWrapper'>
            <a href='' className='button'>
              ОБРАТИ ТАРИФ ТА ЗАБРОНЮВАТИ КРУТІ БОНУСИ
            </a>
          </div>
          <div className='tariffs'>
            <div className='tariff first'>
              <div className='tHeader'>
                <div className='tTop'>
                  <img src='/img/user.png' alt='' />
                  <div className='tTopBody'>
                    <div className='tnName'>Тариф</div>
                    <div className='tName'>“Самостійний”</div>
                    <div className='tStar'>* Без зворотного зв'язку</div>
                  </div>
                </div>
                <div className='tDos'>
                  Доступ до курсу <span>на 1 місяць</span>
                </div>
                <div className='tLine'>
                  <img src='/img/line.png' alt='' />
                </div>
                <div className='allLessons mt3'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='allText'>
                    ДОСТУП ДО <span>УСІХ УРОКІВ КУРСУ</span>
                  </div>
                </div>
              </div>
              <div className='tBody'>
                <div className='pluses'>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>Презентації</span> до усіх уроків
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>Чек-лист</span> поповнення брокерського рахунку
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>Зразок звітності</span> інвестора в Україні
                    </div>
                  </div>
                </div>
                <div className='tblack'>ДОДАТКОВІ БОНУСИ</div>
                <div className='addBonus'>
                  <ul>
                    <li className='allText'>
                      2 надійних брокера, яким можна довіряти
                    </li>
                  </ul>
                </div>
              </div>
              <div className='tfooter'>
                <div className='price'>
                  <div className='old'>14 999 ₴</div>
                  <div className='new'>10 950 ₴</div>
                </div>
                <a href='#' className='tbutton first mt3'>
                  ОБРАТИ ТАРИФ
                </a>
                <a href='#' className='tbutton second'>
                  КУПИТИ В РОЗСТРОЧКУ
                </a>
                <a href='#' className='tbutton third'>
                  ЗАБРОНЮВАТИ МІСЦЕ ЗА 1 000 ГРН
                </a>
              </div>
            </div>
            <div className='tariff second'>
              <div className='tHeader'>
                <div className='tTop'>
                  <img src='/img/user1.png' alt='' />
                  <div className='tTopBody'>
                    <div className='tnName'>Тариф</div>
                    <div className='tName'>“Ми разом”</div>
                    <div className='tStar'>
                      * З зворотнім зв'язком та перевіркою домашнього завдання
                      куратором
                    </div>
                  </div>
                </div>
                <div className='tDos'>
                  Доступ до курсу <span>на 2 місяці</span>
                </div>
                <div className='tLine'>
                  <img src='/img/line.png' alt='' />
                </div>
                <div className='allLessons mt3'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='allText'>
                    ДОСТУП ДО <span>УСІХ УРОКІВ КУРСУ</span>
                  </div>
                </div>
              </div>
              <div className='tBody'>
                <div className='pluses'>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>Презентації</span> до усіх уроків
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>Чек-лист</span> поповнення брокерського рахунку
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>Зразок звітності</span> інвестора в Україні
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>
                        Загальний чат однодумців з учасниками і Тетяною
                      </span>
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>
                        Щотижневий практичний онлайн урок + відповіді на
                        запитання
                      </span>
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText'>
                      <span>Участь в ефірах з запрошеними спікерами;</span>
                    </div>
                  </div>
                </div>
                <div className='tblack'>ДОДАТКОВІ БОНУСИ</div>
                <div className='addBonus'>
                  <ul>
                    <li className='allText'>
                      2 надійних брокера, яким можна довіряти
                    </li>
                    <li className='allText'>
                      Приклади різних інвестиційний портфелей від Тетяни
                    </li>
                    <li className='allText'>
                      Допомога в збірці вашого портфеля від Тетяни
                    </li>
                    <li className='allText'>
                      Додатковий урок від фінансового експерта
                    </li>
                  </ul>
                </div>
              </div>
              <div className='tfooter'>
                <div className='price'>
                  <div className='old'>16 999 ₴</div>
                  <div className='new'>12 950 ₴</div>
                </div>
                <a href='#' className='tbutton first mt3'>
                  ОБРАТИ ТАРИФ
                </a>
                <a href='#' className='tbutton second'>
                  КУПИТИ В РОЗСТРОЧКУ
                </a>
                <a href='#' className='tbutton third'>
                  ЗАБРОНЮВАТИ МІСЦЕ ЗА 1 000 ГРН
                </a>
              </div>
            </div>
            <div className='tariff third'>
              <div className='tHeader'>
                <div className='tTop'>
                  <img src='/img/user.png' alt='' />
                  <div className='tTopBody'>
                    <div className='tnName'>Тариф</div>
                    <div className='tName'>VIP</div>
                    <div className='tStar'>
                      * З зворотнім зв'язком та перевіркою домашнього завдання
                      Тетяною
                    </div>
                  </div>
                </div>
                <div className='tDos'>
                  Доступ до курсу <span>на 3 місяці</span>
                </div>
                <div className='tLine'>
                  <img src='/img/line.png' alt='' />
                </div>
                <div className='allLessons mt3'>
                  <img src='/img/triangle.png' alt='' />
                  <div className='allText'>
                    ДОСТУП ДО <span>УСІХ УРОКІВ КУРСУ</span>
                  </div>
                </div>
              </div>
              <div className='tBody'>
                <div className='pluses'>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText plus1'>
                      <span>Індивідуальний супровід</span> від Тетяни
                      <span>на протязі курсу</span>
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText plus1'>
                      <span>
                        Індивідуальна стратегічна сессія по постановці цілей і
                        плану їх досягнення
                      </span>
                      з Тетяною
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText plus1'>
                      Додатковий онлайн-урок
                      <span>по роботі з платформою брокера</span>
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText plus1'>
                      Індивідуальна консультація
                      <span>
                        по вибору інвест стратегії і сборці інвест портфелю
                      </span>
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText plus1'>
                      Підтримка від автору курсу
                      <span>в чаті ще 2 тижні після завершення курсу</span>
                    </div>
                  </div>
                  <div className='plus'>
                    <img src='/img/plus.png' alt='' />
                    <div className='allText plus1'>
                      Додатковий урок <span>від фінансового експерта</span>
                    </div>
                  </div>
                </div>
                <div className='tblack tyellow'>ДОДАТКОВІ БОНУСИ</div>
                <div className='addBonus bold'>
                  <ul>
                    <li className='allText'>
                      2 надійних брокера, яким можна довіряти
                    </li>
                    <li className='allText'>
                      Приклади різних інвестиційний портфелей від Тетяни
                    </li>
                    <li className='allText'>
                      Допомога в збірці вашого портфеля від Тетяни
                    </li>
                  </ul>
                </div>
              </div>
              <div className='tfooter'>
                <div className='price'>
                  <div className='old'>39 999 ₴</div>
                  <div className='new'>25 950 ₴</div>
                </div>
                <a href='#' className='tbutton first mt3'>
                  ОБРАТИ ТАРИФ
                </a>
                <a href='#' className='tbutton second'>
                  КУПИТИ В РОЗСТРОЧКУ
                </a>
                <a href='#' className='tbutton third'>
                  ЗАБРОНЮВАТИ МІСЦЕ ЗА 1 000 ГРН
                </a>
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
      <div className='contains mt14'>
        <div className='container'>
          <div className='conHeader'>
            <div className='whiteText'>ЦЕ РЕЗУЛЬТАТИ</div>
            <div className='title mt'>МОЇХ УЧНІВ</div>
          </div>
        </div>
      </div>
      <Swiper modules={[Navigation]} navigation slidesPerView={1}>
        <SwiperSlide>
          <img src='/img/vid1.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid2.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid3.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid4.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid5.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid6.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid7.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid8.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/img/vid9.png' alt='' />
        </SwiperSlide>
      </Swiper>
      {/* <div className="swiper">
      <!-- Additional required wrapper -->
      <div className="swiper-wrapper">
        <!-- Slides -->
        <div className="swiper-slide"><img src="/img/vid1.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid2.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid3.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid4.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid5.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid6.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid7.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid8.png" alt="" /></div>
        <div className="swiper-slide"><img src="/img/vid9.png" alt="" /></div>
        ...
      </div>
      <!-- If we need pagination -->
      <div className="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <!-- <div className="swiper-scrollbar"></div> -->
    </div> */}
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
    </Fragment>
  );
};

export default page;
