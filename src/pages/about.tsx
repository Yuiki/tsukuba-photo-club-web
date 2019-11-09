import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"

const About: React.FC = () => (
  <>
    <Meta title="About" />
    <PageContainer title="About">
      <p>筑波大学写真部です。</p>
      <p>
        写真部では年中、新入部員を募集中です。
        <br />
        写真に少しでも興味があれば、経験は全く関係ありません。
      </p>
      <p>
        方針は”心に触れたらシャッターを押そう”
        <br />
        どんな形でも、写真を楽しめれば、オッケーです。
      </p>
      <p>
        1974年、筑波大学設置2年目に出来た伝統あるサークルで、これまで幾度の廃部の危機を乗り越え、
        <br />
        現在は20人以上の部員が在籍しています。
      </p>
      <p>
        活動は、週に一度のミーティング、随時おこなう遠足、そして年に数回の写真展が主です。
        <br />
        このどれもが強制参加ではないので兼部も歓迎です。
        <br />
        さらに、1年生でなくても何年生でも歓迎します。
        <br />
        (実際、2年、3年生で入部してきた人、修士課程で入部してきた人もいます。)
      </p>
      <p>
        興味のある方は、ぜひ気軽にミーティングに来てください。
        <br />
        毎週金曜日18時30分から1C棟1階暗室でおこなっています。
      </p>
    </PageContainer>
  </>
)

export default About
