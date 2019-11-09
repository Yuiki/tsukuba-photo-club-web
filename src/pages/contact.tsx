import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"

const Contact: React.FC = () => (
  <>
    <Meta title="Contact" />
    <PageContainer title="Contact">
      <p>
        入部希望、撮影依頼、その他ご用件がありましたら以下のアドレス宛にメールをお送り下さい。
        <br />
        tsukuba.photoclub[at]gmail.com
        <br />
        ([at]を@に変えてください。)
      </p>
    </PageContainer>
  </>
)

export default Contact
