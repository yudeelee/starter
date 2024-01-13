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
          <div className='bannerWrapper'>
            <div className='topBaner'>
              <span>Авторський маніфест,</span>який навчить інвестувати
            </div>
          </div>
          <div className='headerSlog'>
            Таємниця унікального інвестування, яке змінить твою майбутню
            фінансову незалежність <span>з пасивним доходом від 1000$</span>
          </div>
          <div className='headerBlackSlog'>
            <span>і для цього не потрібно бути інвестором,</span> цей варіант
            підходить навіть якщо ти новачок
          </div>
          <div className='headerHi'>Привіт, на зв'язку</div>
          <div className='headerName'>ТЕТЯНА СЕЛЕЗНЬОВА</div>
        </div>
      </header>
      <div className='whoiam'>
        <div className='container'>
          <p className='text'>
            Цей маніфест розкриє унікальні стратегії та підходи до інвестування,
            які допоможуть тобі змінити твоє майбутнє фінансове становище. Я
            детально розгляну секрети цих методів та розкажу, як здобути
            пасивний дохід від 1000$.
          </p>
          <p className='text'>
            Отже, приготуй собі чашку кави, а потім уважно вивчай кожний
            параграф цього маніфеста. Тебе чекає неймовірна подорож :) Почнемо!
          </p>
          <div className='whoMain'>
            <div className='whoLeft'>
              <img src='/img/atwork.png' alt='' />
            </div>
            <div className='whoRight'>
              <span>Мене звати</span>
              <div className='whoName'>ТЕТЯНА</div>
              <div className='whoName'>СЕЛЕЗНЬОВА</div>
              <div className='whoText'>
                <p className='text'>
                  Я діючий підприємець з 2020 року з щомісячним оборотом бізнесу
                  $9’000+
                </p>
                <p className='text'>
                  Свої перші інвестиції я почала робити на початку війни, а це
                  лише півтора роки тому… На той час у мене було вільних $3’000,
                  які я вирішила інвестувати + кожен місяць я відкладала по $500
                  до свого інвестиційного портфеля.
                </p>
                <p className='text'>
                  Наразі я вже маю більше $28’000 у інвестиційному портфелі,
                  який показав у кризу 27% прибутку і це на падаючому ринку.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grafic'>
        <div className='container'>
          <img src='/img/grafik.png' alt='' />
        </div>
      </div>
      <div className='givedMe'>
        <div className='container'>
          <div className='title'>ЩО ЦЕ ІНВЕСТУВАННЯ ДАЛО МЕНІ?</div>
          <div className='givedWrapper'>
            <div className='left'>
              <div className='blackBack'>
                <div className='text'>
                  Я почала будувати фундамент під подальші свої плани, як
                  сімейні так і фінансові…
                </div>
              </div>
            </div>
            <div className='right'>
              <ul>
                <li>
                  <div className='numberWrapper'>
                    <div>1</div>
                  </div>
                  <div className='text'>
                    Я почала планувати фінансову свободу для своїх дітей
                  </div>
                </li>
                <li>
                  <div className='numberWrapper'>
                    <div>2</div>
                  </div>
                  <div className='text'>
                    Почала планувати будівництво сімейного будинку
                  </div>
                </li>
                <li>
                  <div className='numberWrapper'>
                    <div>3</div>
                  </div>
                  <div className='text'>
                    Звільнила свій час для сім'ї і більше часу провожу з нею,
                    поки мій капітал примножується кожен день, кожен місяць
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='greyBack'>
            <img src='/img/Pin.png' alt='' />
            <div className='litTitle'>Інвестування</div>
            <div className='text'>
              Це такий самий інструмент, як і похід до спортзалу, але ці
              інструменти різні і не всім вони підходять і потрібні.
            </div>
          </div>
          <div className='eachofus'>
            <div className='eachTitle'>
              У кожного з нас, є свої фінансові цілі…
            </div>
            <div className='eachWrapper'>
              <div className='eachItem text'>… Власний сімейний будинок …</div>
              <div className='eachItem text'>
                … Фінансова безпека дітей та їх капітал …
              </div>
            </div>
            <div className='eachItem text'>
              … Купівля нерухомості під здачу в оренду …
            </div>
            <div className='eachItem text mr'>
              … Пасивний дохід у $1’000 на місяць ….
            </div>
          </div>
          <div className='mineIdea'>
            <span>Головна моя ідея,</span>це надати тобі фінансові інструменти,
            аналітичні інструменти і надати тобі покроковий план дій для
            досягнення саме твоїх фінансових цілей, як я це роблю зараз.
          </div>
          <div className='eachTitle'>
            Але перед кожною інвестицією є свої заперечення, в свій час я сама
            їх мала і дуже добре розумію, що одне з них у тебе також є:
          </div>
          <div className='mineWrapper'>
            <div className='eachItem text fir'>
              … не знаю для чого мені відкладати гроші …
            </div>
            <div className='eachItem text sec'>
              … наразі не маю цілі під що потрібні ці гроші …
            </div>
            <div className='eachItem text ther'>
              … немає потреби в плануванні майбутнього, в тому числі пенсії та
              забезпеченої старості …
            </div>
            <div className='eachItem text for'>
              … я і так достатньо заробляю, але не маю уяви, як зробити, щоб
              гроші працювали на мене …
            </div>
          </div>
          <div className='stop'>
            <img src='/img/stop.png' alt='' />
            <div className='stopText'>ЗУПИНИСЬ</div>
          </div>
          <div className='text'>
            Якщо ти зараз щось з цього відчуваєш, подумай що ти можеш зробити,
            щоб почати себе відчувати завжди у виграшному становищі і приймати
            рішення не тому що так роблять інші, а тому що ти так хочеш, щоб
            досягти своєї фінансової цілі.
          </div>
          <div className='blackText'>
            Давай розберемо приклад, як інвестиція може працювати на тебе вже
            саме зараз, а не колись там через 100 років! 👇👇👇
          </div>
          <div className='text'>
            У тебе зараз є, якась сума грошей, але її не достатньо, щоб одразу
            купити дім під здачу в оренду.
          </div>
          <div className='text'>
            Ти розумієш, що тобі потрібно ще накопичити грошей, щоб була повна
            сума для купівлі, АЛЕ…
          </div>
          <div className='text'>
            Але завжди будуть фактори, які заважатимуть тобі на шляху до
            омріяної цілі:
          </div>
          <div className='ecoList1'>
            <div className='listItem'>
              <div className='numberWrapper'>
                <div>1</div>
              </div>
              <div className='text'>Інфляція - знецінення гривні</div>
            </div>
            <div className='listItem'>
              <div className='numberWrapper'>
                <div>2</div>
              </div>
              <div className='text'>Девальвація - знецінення валюти</div>
            </div>
          </div>
          <div className='ecoList2'>
            <div className='listItem'>
              <div className='numberWrapper'>
                <div>3</div>
              </div>
              <div className='text'>Непередбачувані витрати, кредити</div>
            </div>
            <div className='listItem'>
              <div className='numberWrapper'>
                <div>4</div>
              </div>
              <div className='text'>Війна</div>
            </div>
            <div className='listItem'>
              <div className='numberWrapper'>
                <div>5</div>
              </div>
              <div className='text'>Економічні кризи, коронавірус і тд.</div>
            </div>
          </div>
          <div className='text'>
            Навіть, якщо ти маєш всі розрахунки, скільки тобі потрібно часу, щоб
            накопичити цю суму.
          </div>
          <div className='mineIdea'>
            <span>Всі ці фактори </span>будуть відтягувати кінцеву точку і
            відсуватимуть тебе у часі для досягнення цілі.
          </div>
        </div>
      </div>
      <div className='helpme'>
        <div className='container'>
          <div className='title'>
            А як інвестування може тобі допомогти саме в такому випадку?
          </div>
          <div className='text'>
            Ти можеш використати фондовий ринок як БУФЕР на якому ти будеш
            накопичувати кошти (які будуть зростати в ціні) та на них будуть
            нараховуватись дивіденди!
          </div>
          <div className='text'>
            А фактор інфляції, девальвації, та непередбачених витрат -
            <span>зникнуть назавжди.</span>
          </div>
          <div className='text'>
            В такому випадку тобі буде легше і швидше накопичити кошти для
            покупки того ж самого будинку.
          </div>
          <div className='text'>
            Добре, а якщо твоя ціль не купівля будинку,
            <span>а створити собі пасивний дохід в $1’000 на місяць?</span>
          </div>
          <div className='text'>
            Для досягнення пасивного доходу у $1’000 на місяць, тобі достатньо
            буде накопичити капітал у 200 000 $ на фондовому ринку!
          </div>
          <div className='text'>Чому?</div>
          <div className='text'>
            $200’000 - це 2 квартири під здачу в оренду з отриманням орендної
            плати по 500$ за квартиру і ти отримаєш омріяну $1’000 пасивного
            доходу на місяць!
          </div>
          <div className='title'>ВИГЛЯДАЄ ЯК ІДЕАЛЬНИЙ ПЛАН ІНВЕСТУВАННЯ!</div>
          <div className='text'>
            Але у тебе буде власний план і власні фінансові цілі!
          </div>
          <div className='planImg'>
            <img src='/img/plan.png' alt='' />
          </div>
          <div className='littleTitle'>Це графік індексу S&P 500.</div>
          <div className='text'>
            Цей графік показує, як рухаються 500 найбільших компаній США, та як
            зростали в цінах акції протягом останніх 10 років.
          </div>
          <div className='text'>
            У 2013 році вартість цінного активу який відображає індекс S&P 500
            коштував $113, а в 2023 $400 за одну акцію, це примноження капіталу
            в 4 рази протягом 10 років.
          </div>
          <div className='text'>
            10 років це не так вже й багато якщо зважати, що ти хочеш прожити
            повноцінне життя і дожити до щасливої старості.
          </div>
          <div className='text'>
            Якщо ти зараз вже розумієш, який результат ти хочеш отримати в
            фінансових показниках і маєш бачення твоїх фінансових цілей….
          </div>
          <div className='text'>
            Але не знаєш як підійти до цього питання і як досягти цілей?
          </div>
          <div className='text'>Вітаю! Ти вже можеш почати інвестувати)</div>
          <div className='littleTitle'>
            Сьогодні ти отримаєш інструменти, які дозволять тобі досягти своєї
            цілі за допомогою інвестицій на фондовому ринку.
          </div>
          <div className='bleckFon'>
            <div className='text white'>
              <span className='yellowSpan'>
                Перед тим, як дати інструменти для інвестицій,
              </span>
              я хочу, поділитися результатами моїх учнів, які вони отримують при
              правильному використанні всіх цих інструментів
            </div>
          </div>
          <div className='client'>
            <img src='/img/ax.png' alt='' />
            <div className='clientName'>
              <div className='name'>Христина</div>
              <div className='text'>30 років. Копірайтер.</div>
            </div>
          </div>
          <div className='points'>
            <div className='point'>
              <img src='/img/okl.png' alt='' />
              <div className='blackBack'>
                <div className='pointTitle'>Точка А:</div>
                <div className='text'>
                  Щось чула про фондовий ринок, знала але не починала!
                </div>
              </div>
            </div>
            <div className='point'>
              <img src='/img/okl1.png' alt='' />
              <div className='blackBack'>
                <div className='pointTitle yellow'>Точка B:</div>
                <div className='text'>
                  Інвестиційний портфель вже через рік після навчання $1’300
                  (постійно інвестує щомісяця і накопичує  власний капітал
                  фінансової свободи). При цьому прибутковість за перший рік
                  25-30% річних у $
                </div>
              </div>
            </div>
          </div>
          <div className='planImg'>
            <img src='/img/grafik1.png' alt='' />
          </div>
          <div className='client'>
            <img src='/img/ax.png' alt='' />
            <div className='clientName'>
              <div className='name'>Анастасія</div>
              <div className='text'>23 роки</div>
            </div>
          </div>
          <div className='points'>
            <div className='point'>
              <img src='/img/okl.png' alt='' />
              <div className='blackBack'>
                <div className='pointTitle'>Точка А:</div>
                <div className='text'>
                  Почала інвестувати в літку 2022 року під час війни.
                </div>
                <div className='text'>
                  Прийшла на навчання з запитом, що робити з вільними коштами,
                  та як їх не втратити.
                </div>
              </div>
            </div>
            <div className='point'>
              <img src='/img/okl1.png' alt='' />
              <div className='blackBack'>
                <div className='pointTitle yellow'>Точка B:</div>
                <div className='text'>
                  Інвестиційний портфель $11’000+, прибутковість 11,85 % річних
                  в долларах вже через рік часу.
                </div>
              </div>
            </div>
          </div>
          <div className='greyBack'>
            <div className='litTitle'>Інвестування</div>
            <div className='text'>
              Це такий самий інструмент, як і похід до спортзалу, але ці
              інструменти різні і не всім вони підходять і потрібні.
            </div>
          </div>
          <div className='planImg1'>
            <img src='/img/iPhone.png' alt='' />
          </div>
          <div className='yellowBlock'>
            <img src='/img/omg.png' alt='' />
            <div className='yellowText'>
              Це тільки маленька частина тих учнів, хто вже отримує результати,
              а у мене їх <span>більше 100</span>
            </div>
          </div>
        </div>
      </div>
      <div className='givedMe'>
        <div className='container'>
          <div className='title'>ПОЧИНАТИ ПОТРІБНО ВЖЕ ЗАРАЗ</div>
          <div className='givedWrapper'>
            <div className='left'>
              <div className='blackBack'>
                <div className='text'>
                  Вірю, що ти не інвестуєш, бо на це є своя причина…
                </div>
              </div>
            </div>
            <div className='right'>
              <ul>
                <li>
                  <div className='numberWrapper'>
                    <div>1</div>
                  </div>
                  <div className='text'>Ти вважаєш, що це не для тебе?</div>
                </li>
                <li>
                  <div className='numberWrapper'>
                    <div>2</div>
                  </div>
                  <div className='text'>
                    Ти вирішив, що вже пізно починати інвестувати?
                  </div>
                </li>
                <li>
                  <div className='numberWrapper'>
                    <div>3</div>
                  </div>
                  <div className='text'>
                    Ти вже мав досвід інвестування, але не отримав бажаний
                    результат?
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='text'>
            Але всі ці запереченя, тільки в твоїй голові. Для інвестування
            достатньо просто мати фінансову ціль, а в наш час - це як
            обов'язковий фактор життя.
          </div>
          <div className='greyBack'>
            <img src='/img/Pin.png' alt='' />
            <div className='litTitle'>Запам'ятай,</div>
            <div className='text'>
              завжди хтось працює менше, але заробляє більше!
            </div>
          </div>
          <div className='text mt'>
            А хтось працює по 12 годин на день, але заробляє в рази менше!
          </div>
          <div className='text'>Чому так відбувається?</div>
          <div className='littleTitle'>Все дуже просто!</div>
          <div className='yelText'>
            Хто залежать від одного джерела доходу будуть ходити на роботу
            постійно!
          </div>
          <div className='text'>
            Моя таємниця інвестування лежить у 9 поступових кроках,
            <span>які якраз і приведуть тебе до бажаної $1’000 на пасиві.</span>
          </div>
          <div className='text'>
            Так що, бери блокнот та ручку і записуй кожний з етапів)
          </div>
          <div className='text'>Поїхали…</div>
          <div className='yellowBlock'>
            <img src='/img/omg1.png' alt='' />
            <div className='yellowText1'>
              МОЯ ТАЄМНИЦЯ <span>УНІКАЛЬНОГО ІНВЕСТУВАННЯ</span>
            </div>
          </div>
          <div className='lightYellowBlock'>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>1</div>
              </div>
              <div className='text'>
                Міняємо майндсет бідної людини і програмуємо себе,
                <span>що інвестування це вода без якої неможливо прожити.</span>
              </div>
            </div>
            <div className='text'>
              (це не лише інструмент для багатих)
              <br />
              <span>Це інструмент для тих, хто хоче стати багатим!</span>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>2</div>
              </div>
              <div className='text'>
                Аналізуємо наш фінансовий стан на цей час, на якому етапі ти
                знаходишся:
              </div>
            </div>
            <div className='text'>
              <ul>
                <li>фінансова небезпека - доходи - витрати = -$1’000 </li>
                <li>фінансова залежність - доходи - витрати = 0</li>
                <li>
                  фінансова незалежність - є пасивний дохід $500, чи $1’000 
                </li>
                <li>
                  фінансова свобода = пасивний дохід значно перевищує витрати 
                </li>
              </ul>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>3</div>
              </div>
              <div className='text'>Формуємо фінансову подушку.</div>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>4</div>
              </div>
              <div className='text'>
                Далі беремо частину грошей і направляємо у інвестування формуємо
                капітал фінансової свободи!
              </div>
            </div>
            <div className='blackPs'>
              <div className='ps'>P.S:</div>
              <div className='text med'>
                Але лише, якщо ти на рівні фінансової залежності та вище!
              </div>
            </div>
            <div className='text'>
              Якщо ти живеш у кредит, то тобі спочатку потрібно перейти на
              рівень вище по шкалі фінансового стану.
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>5</div>
              </div>
              <div className='text'>
                Формування капіталу фінансової свободи називається золотою
                гускою.
              </div>
            </div>
            <div className='text'>
              (це те, що буде приносити золоті яйця) 
              <br />
              Пасивний дохід на який ти можеш жити.
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>6</div>
              </div>
              <div className='text'>Шукаємо надійного брокера.</div>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>7</div>
              </div>
              <div className='text'>
                Формуємо збалансований інвестиційний портфель з цінних паперів:
                акцій та облігацій збалансованих відповідно до стану економіки
                та ситуації на фондовому ринку.
              </div>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>8</div>
              </div>
              <div className='text'>
                Пожинаємо плоди - дивіденди та виплати % по облігаціях.
              </div>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>9</div>
              </div>
              <div className='text'>
                Нарощуємо капітал та збільшуємо наші пасивні доходи від
                інвестування реінвестуючи зароблені дивіденди.
              </div>
            </div>
          </div>
          <div className='greyBack'>
            <div className='litTitle'>Як результат цих кроків:</div>
            <div className='text'>
              Відчуття спокою за завтрашній день, за твою фінансову безпеку та
              фінансову безпеку твоєї родини, спокій за майбутнє твоїх дітей.
            </div>
          </div>
          <div className='yelText mt'>
            Зараз саме той час, щоб почати діяти за цими кроками.
          </div>
          <div className='yellowBorder'>
            <div className='bigText'>
              Але я розумію, що отримати цей план це одне, а почати діяти,
              прибрати страхи та свої негативні заперечення - це інше…
            </div>
            <div className='bigText mt'>
              Тому я вирішила створити 4 денний онлайн-інтенсив
              <br />
              <span>“ПЕРШІ КРОКИ ДО ФІНАНСОВОЇ НЕЗАЛЕЖНОСТІ”</span>
            </div>
          </div>
          <div className='bleckFon'>
            <div className='text white'>
              <span className='yellowSpan'>
                Де я допоможу тобі привести в порядок твої фінанси та створити
                свій перший інвестиційний портфель всього за 4 дні.
              </span>
            </div>
          </div>
          <div className='text upp mt'>
            Цей <span>інтенсив ідеально підійде</span> навіть,
            <span>якщо ти повний новачок</span> в інвестиціях.
          </div>
        </div>
      </div>
      <div className='givedMe'>
        <div className='container'>
          <div className='givedWrapper'>
            <div className='left'>
              <div className='blackBack'>
                <div className='text'>
                  На інтенсиві ми розберемо з тобою такі теми:
                </div>
              </div>
            </div>
            <div className='right'>
              <ul>
                <li>
                  <div className='numberWrapper'>
                    <div>1</div>
                  </div>
                  <div className='text'>
                    Як незалежно від рівня доходу закривати свої фінансові цілі.
                  </div>
                </li>
                <li>
                  <div className='numberWrapper'>
                    <div>2</div>
                  </div>
                  <div className='text'>
                    Визначимо джерело додаткового доходу, яке допоможе досягти
                    своїх цілей.
                  </div>
                </li>
                <li>
                  <div className='numberWrapper'>
                    <div>3</div>
                  </div>
                  <div className='text'>Розберемо мій інвест-портфель.</div>
                </li>
                <li>
                  <div className='numberWrapper'>
                    <div>4</div>
                  </div>
                  <div className='text'>
                    Створимо працюючу схему твого першого інвест портфелю з 10%
                    прибутковістю.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='text mt'>Але і це ще не все))</div>
          <div className='text'>
            Я підготувала дуже круті бонуси, які посилять твій результат!
          </div>
          <div className='gigGreyBlock'>
            <img src='/img/grey1.png' alt='' />
            <div className='text'>
              <span className='Big'>Авторська табличка</span>Для розрахунку
              особистих фінансів і фінансів бізнесу, що допоможе навести лад у
              грошах
            </div>
          </div>
          <div className='gigGreyBlock'>
            <img src='/img/grey2.png' alt='' />
            <div className='text'>
              <span className='Big'>Методика постановки фінансової цілі</span>
            </div>
          </div>
          <div className='gigGreyBlock'>
            <img src='/img/grey3.png' alt='' />
            <div className='text'>
              <span className='Big'>Калькулятор</span>Для розрахунку свого
              інвестиційного плану
            </div>
          </div>
          <div className='gigGreyBlock'>
            <img src='/img/grey4.png' alt='' />
            <div className='text'>
              <span className='Big'>Порівняльна таблиця</span>Різних способів
              отримання пасивного доходу, що допоможе обрати найкращий спосіб
              для досягнення своїх цілей
            </div>
          </div>
          <div className='gigGreyBlock'>
            <img src='/img/grey5.png' alt='' />
            <div className='text'>
              <span className='Big'>Аналіз</span>Реальних інвестиційних
              портфелів інвесторів-початківців і досвідчених інвесторів
            </div>
          </div>
          <div className='text mt'>
            І як ви вважаєте, скільки все це може коштувати?
          </div>
          <div className='text'>Давайте підсумуємо, що ви отримаєте:</div>
          <div className='lightYellowBlock'>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>1</div>
              </div>
              <div className='boldText'>Основна програма.</div>
            </div>
            <div className='text'>
              <ul>
                <li>
                  Як незалежно від рівня доходу закривати свої фінансові цілі
                </li>
                <li>
                  Визначаємо джерело додаткового доходу, яке допоможе досягти
                  своїх цілей
                </li>
                <li>Розбір мого інвест-портфелю</li>
                <li>
                  Працююча схема твого першого інвест портфелю з 10%
                  прибутковістю 
                </li>
              </ul>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>2</div>
              </div>
              <div className='boldText'>Бонуси.</div>
            </div>
            <div className='text'>
              <ul>
                <li>
                  Авторська табличка для розрахунку особистих фінансів і
                  фінансів бізнесу, що допоможе навести лад у грошах
                </li>
                <li>Методика постановки фінансової цілі</li>
                <li>Калькулятор для розрахунку свого інвестиційного плану</li>
                <li>
                  Порівняльна таблиця різних способів отримання пасивного
                  доходу, що допоможе обрати найкращий спосіб для досягнення
                  своїх цілей
                </li>
                <li>
                  Аналіз реальних інвестиційних портфелів інвесторів-початківців
                  і досвідчених інвесторів
                </li>
                <li>
                  Готова покрокова схема побудови вашого першого інвестиційного
                  портфелю
                </li>
              </ul>
            </div>
            <div className='littleBlackBlock'>
              Якби ви купували всі ці продукти окремо,
              <span>то це обійшлося б вам мінімум 6 980 грн.</span>
            </div>
          </div>
          <div className='yelText mt'>
            Що ви отримаєте після 4-денного інтенсива і впровадження всіх
            бонусів?
          </div>
          <div className='shortList'>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>1</div>
              </div>
              <div className='text'>
                Ви навчитесь аналізувати свої фінанси та правильно ставити
                фінансові цілі.
              </div>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>2</div>
              </div>
              <div className='text'>
                Зможете розрахувати досягнення своєї фінансової цілі
              </div>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>3</div>
              </div>
              <div className='text'>
                Отримаєш покроковий план, який допоможе створити свій перший
                інвестиційний портфель
              </div>
            </div>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>4</div>
              </div>
              <div className='text'>
                Готовий інвест портфель з etf фондів, який дасть 10%
                прибутковості на рік.
              </div>
            </div>
          </div>
          <div className='bleckFon center'>
            <div className='bigText white'>
              Як ви вважаєте, все це може коштувати 6 980 грн?
            </div>
          </div>
          <div className='text center mt'>Дивне питання, так?))</div>
          <div className='text center'>Звісно все це коштує 6 980 грн!</div>
          <div className='orangeBlock'>
            <img src='/img/okl2.png' alt='' />
            <div className='orangeText'>
              Але я розумію, що не кожен може собі дозволити зараз віддати 6 980
              грн
            </div>
          </div>
          <div className='bigText center mt'>
            Тож я вирішила знизити ціну аж на 73%.
          </div>
          <div className='bigText center'>Це знижка аж на 5 100 грн!</div>
          <div className='textNow center'>
            Якщо приєднаєшся <span>Зараз</span> то ти зможеш забрати все…
          </div>
          <div className='bigText center mt'>
            за <span className='per'>6 980 грн</span>
            <span> 1 980 грн</span>
          </div>
          <div className='buttonWrapper'>
            <a
              href='https://proofinvestor.com.ua/'
              className='button'
              target='blank'
            >
              Взяти участь
            </a>
          </div>
          <div className='bigBlackText mt'>
            Чому я роблю таку величезну знижку?
          </div>
          <div className='text mt'>Є кілька причин...</div>
          <div className='text'>
            По-перше, я впевнена, що ви отримаєте максимум цінності. А для мене
            це дуже важливо.
          </div>
          <div className='text'>
            По-друге, ви почнете вже отримувати результат та наблизитись до
            своєї цілі і захочете зростати далі і ви знову прийдете до мене.
          </div>
          <div className='bigBlackText mt'>
            Ось такі відгуки я отримую щодня від своїх учнів
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
          {/* <div className='swiper'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <img src='/img/vid1.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid2.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid3.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid4.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid5.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid6.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid7.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid8.png' alt='' />
              </div>
              <div className='swiper-slide'>
                <img src='/img/vid9.png' alt='' />
              </div>
            </div>

            <div className='swiper-pagination'></div>

            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </div> */}
          <div className='buttonWrapper mt'>
            <a
              href='https://proofinvestor.com.ua/'
              className='button'
              target='blank'
            >
              ПРИЄДНАТИСЯ ДО ІНТЕНСИВУ
            </a>
          </div>
          <div className='yellowBlock black mt'>
            <img src='/img/arrows.png' alt='' />
            <div className='yellowText1'>
              У ВАС ЗАРАЗ <span>Є 3 ШЛЯХИ:</span>
            </div>
          </div>
          <div className='lightYellowBlock grey'>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>1</div>
              </div>
              <div className='boldText'>Залишити все як є.</div>
            </div>
            <div className='text'>
              Нічого не міняти. Нічого не робити. Далі жити як жили. Далі
              працюватиме все життя на пенсію.
            </div>
          </div>
          <div className='lightYellowBlock'>
            <div className='numItem'>
              <div className='numberWrapper'>
                <div>2</div>
              </div>
              <div className='boldText'>Пройти весь шлях самостійно.</div>
            </div>
            <div className='text'>
              Перелопатити тонну книг з інвестицій. Витратити частину своїх
              грошей на провальні стратегії. Набити багато шишок. Страждати від
              навантаження інформації. Пережити депресію від постійних провалів.
              І можливо через 5-10 років зрозуміти, як робити правильні
              інвестиції.
            </div>
          </div>
          <div className='lightYellowBlock green'>
            <div className='numItem'>
              <div className='numberWrapper white1'>
                <div>2</div>
              </div>
              <div className='boldText'>Дозволити мені скоротити вам шлях.</div>
            </div>
            <div className='text'>
              Цей шлях мною вже пройдено і почала я його ще на початку війни. І
              я розумію, що можу вам допомогти почати інвестувати та отримати
              результат. Навіщо ускладнювати собі життя? Просто приєднуйтесь до
              інтенсива та забирайте всі бонуси, які я підготувала для вас для
              посилення результатів.
            </div>
          </div>
          <div className='buttonWrapper mt'>
            <a
              href='https://proofinvestor.com.ua/'
              className='button'
              target='blank'
            >
              ПРИЄДНАТИСЯ ДО ІНТЕНСИВУ
            </a>
          </div>
          <footer className='footer'>
            <div className='footerBlock'>
              <div className='lightText'>
                <span>ФІЗИЧНА ОСОБА ПІДПРИЄМЕЦЬ</span>СЕЛЕЗНЬОВА ТЕТЯНА
                ОЛЕКСІЇВНА
              </div>
            </div>
            <div className='footerBlock'>
              <div className='lightText'>
                <span>Банківські реквізити:</span>IBAN
                UA443052990000026005011012234 в АТ КБ "ПРИВАТБАНК"
              </div>
            </div>
          </footer>
        </div>
      </div>
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
  );
};

export default page;
