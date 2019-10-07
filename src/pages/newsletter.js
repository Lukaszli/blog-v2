import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Newsletter" />
    <h1>Bądźmy w kontakcie!</h1>
    <div className="lh-copy mt3">
    <p>
      Jeżeli chcesz otrzymywać starannie wyselekcjonowane materiały do nauki, nowe tutoriale mojego autorstwa czy po prostu istotne newsy ze świata
      full stack developmentu prosto do Twojej skrzynki e-mail to zapisz się na mój newsletter.
    </p>
    </div>

    <div className="pa4-l">
  <form class="newsletterBox mw7 center pa4 br2-ns ba b--black-10" action="https://gmail.us20.list-manage.com/subscribe/post?u=cd9534d13c2fcd4e20e32977c&amp;id=55b16eeb45" method="post" name="mc-embedded-subscribe-form" target="_blank">
    <fieldset className="cf bn ma0 pa0">
      <legend className="pa0 f5 f4-ns mb3 b">Nie przegap nowych materiałów i zapisz się na Newsletter!</legend>
      <div className="cf">
        <label className="clip" for="email-address">Email Address</label>
        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 w-100 w-75-m w-80-l br2-ns br--left-ns" name="EMAIL" id="mce-EMAIL" placeholder="Twój adres e-mail" required />
        <div style={{position: 'absolute', left: '-5000px'}}><input type="text" name="b_cd9534d13c2fcd4e20e32977c_55b16eeb45" tabindex="-1" value="" /></div>
        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subskrybuj" />
      </div>
    </fieldset>
    <div><br/>Z newslettera w każdej chwili można się bardzo łatwo wypisać. Wystarczy w stopce wiadomości kliknąć w link i już nigdy nie otrzymasz kolejnej wiadomości. Jeżeli interesuje Cię polityka prywatności oraz sprawy związane z tzw. RODO to zapraszam pod <a href="/privacy-policy-cookies">ten link</a>.
</div>
  </form>

</div>
  </Layout>
)

export default SecondPage
