import { hiw1, hiw2, hiw3, hiw4, hiw5, q1, q2, q3, q4 } from './textcontents';
import { ISOSCard } from 'components/card';
import Image from 'next/image'
import { Footer } from 'components/footer';
import Router from 'next/router';
import DocIcon from './docicon';

const BecomeAnEarlyInvestor = (props: { className: string }) => (
  <div
    className={`
      ${props.className} px-[1rem] tablet1:px-[2rem] py-[2px] cursor-pointer
      bg-becomeanearlyinvestor bg-cover bg-repeat-round
      font-smpx text-center text-black`}
    onClick={() => Router.push('/acquire')}
  >BECOME AN EARLY INVESTOR</div>
)

const Roadmap2022Title = () => (
  <div className='my-2'>
    <img src='/assets/images/roadmaptitle.png' className='hidden tablet1:block h-[70px] ml-10'></img>
    <div className={`tablet1:hidden s3-text-sectiontitle skew-y-[-4deg]`}>ROADMAP 2022</div>
  </div>
)

export default function Hero() {

  return (
    <div>
      {/* Main Logo */}
      <div className='hidden -mt-3 tablet1:block'>
        <img src='/assets/images/logo.png' className='w-[29%] h-auto mx-auto' draggable={false}></img>
      </div>

      {/* First Screen */}
      <div className='font-outpxd text-center tracking-wider text-[40px] tablet1:text-[80px] leading-[40px] mt-2 s3-stroke-1 tablet1:s3-stroke-2'><span className='hidden tablet1:inline'>&nbsp;</span>STABL33 PROTOCOL</div>
      <div className='s3-text-welcome-description max-w-full tablet1:max-w-[70%] mt-[12px] tablet1:mt-[24px]'>The Only Decentralized Savings & Lending Protocol Based On Non-Depreciating Digital Assets</div>
      <div className='hidden tablet1:block font-smpx s3-stroke-0_5 text-center tracking-tight text-[18px] tablet1:text-[38px] my-4'>No Debt Loans - 0% Interest - 100% Financed - No Liquidation</div>

      <div className='flex justify-center gap-11 mt-[20px] items-start'>
        <DocIcon name='whitepaper'></DocIcon>
        <BecomeAnEarlyInvestor className={'hidden tablet1:flex text-[18px] font-bold mt-3'}></BecomeAnEarlyInvestor>
        <DocIcon name='deck'></DocIcon>
      </div>
      
      {/* Introduction */}
      <div className='flex justify-center tablet1:hidden py-1 bg-[#FFCA08]/40 border border-white s3-text-normal w-[90%] mx-auto mt-5 tablet1:mt-10'>Introducing</div>

      {/* Description */}
      <div className='flex flex-wrap justify-center gap-3 tablet1:gap-6 desktop:justify-between desktop:w-[80%] -mx-4 tablet1:mx-auto s3-text-normal text-center leading-7 mt-6 tablet1:mt-[50px]'>
        <div className='bg-memo bg-cover bg-repeat-round w-[160px] tablet1:w-[280px] min-h-[100px] tablet1:min-h-[170px] px-4 tablet1:px-8 py-3 flex items-center'>
          The worlds first non-depreciating digital assets
        </div>

        <div className='bg-memo bg-cover bg-repeat-round w-[160px] tablet1:w-[280px] min-h-[100px] tablet1:min-h-[170px] px-4 tablet1:px-8 py-3 flex items-center'>
          Allowing no debt loans, that are 100% financed without interest or getting liquidated
        </div>

        <div className='bg-memo bg-cover bg-repeat-round w-[160px] tablet1:w-[280px] min-h-[100px] tablet1:min-h-[170px] px-4 tablet1:px-8 py-3 flex items-center'>
          Fueling a decentralized savings protocol with the highest non-depreciating returns on the market
        </div>
      </div>

      <div className='flex justify-center my-4'>
        <BecomeAnEarlyInvestor className={'flex tablet1:hidden text-[14px]'}></BecomeAnEarlyInvestor>
      </div>


      {/* Stabl3 */}
      <div className='flex justify-center mx-auto text-white tablet1:hidden s3-text-sectiontitle'>The stabl3 token</div>
      <div className='flex justify-center gap-2 tablet1:gap-[20px] font-smpx text-[14px] tablet1:text-[20px] leading-6 tablet1:leading-8 text-center mt-4'>
        <div className='bg-thestabletoken_vertical tablet1:bg-thestabletoken_horizontal bg-cover bg-repeat-round w-[36%] tablet1:w-[25%] px-4 tablet1:px-6 py-4 flex items-center my-0'>
          STABL3 are non-depreciating tokens which can only be acquired (but not sold) on the STABL33 PRTOCOLs platform.
        </div>

        <div className='bg-rightarrow_brown bg-cover bg-repeat-round w-[30px] h-[30px] tablet1:w-[60px] tablet1:h-[60px] my-auto'></div>

        <div className='bg-thestabletoken_vertical tablet1:bg-thestabletoken_horizontal bg-cover bg-repeat-round w-[36%] tablet1:w-[25%] px-4 tablet1:px-6 py-4 flex items-center my-0'>
          They are used as loan collateral for the STABL33 PROTOCOLs native stablecoin UCD (United Crypto Dollar).
        </div>
      </div>

      {/* How it works */}
      <div className='mx-auto w-full tablet1:w-[80%] mt-0 tablet1:mt-8'>
        <div className='float-left tablet1:float-right tablet1:pr-2 flex tablet1:hidden s3-text-sectiontitle skew-y-[-4deg] tablet1:skew-y-[4deg] mt-[50px] tablet1:mt-4'>How it works</div>
        <img src={'/assets/images/howitworks.png'} className='float-left tablet1:float-right hidden tablet1:flex h-[70px]' draggable='false'></img>
        <br />
        <br />

        <div className='flex flex-wrap justify-between font-smpx text-[12px] tablet1:text-[22px] text-center leading-[10px] tablet1:leading-[18px] mt-5 clear-left tablet1:clear-right '>
          <ISOSCard className='bg-m_hiw_1 tablet1:bg-d_hiw_1 basis-1/4 tablet1:basis-1/5'>{hiw1}</ISOSCard>
          <ISOSCard className='bg-m_hiw_2 tablet1:bg-d_hiw_2 basis-1/4 tablet1:basis-1/5'>{hiw2}</ISOSCard>
          <ISOSCard className='bg-m_hiw_3 tablet1:bg-d_hiw_3 basis-1/4 tablet1:basis-1/5'>{hiw3}</ISOSCard>
          <ISOSCard className='bg-m_hiw_4 tablet1:bg-d_hiw_4 basis-1/4 tablet1:basis-1/5'>{hiw4}</ISOSCard>
          <ISOSCard className='hidden tablet1:bg-d_hiw_5 tablet1:flex'>{hiw5}</ISOSCard>
        </div>
      </div>

      <div className='flex tablet1:hidden mx-auto justify-center text-center w-[90%] py-2 clear-both bg-fifthhowitworks bg-cover bg-repeat-round font-smpx text-[12px] leading-[14px] mt-6'>
        KEY TAKEAWAY!<br />
        Be mindful when taking loan or profit.<br />
        WAGMI!!
      </div>

      <br />

      {/* Four ways to generate revenue */}
      <div className='relative min-h-[200px] block tablet1:flex tablet1:flex-row gap-6 tablet1:w-[87%] -mx-4 tablet1:mx-auto'>
        <div className='relative tablet1:hidden'>{/* flex justify-end tablet1:justify-start */}
          <img src={'/assets/images/fourwayscircle.png'} width={400} height={400} draggable={false} className='absolute flex tablet1:hidden top-0 left-0 w-[50%] h-auto my-auto z-10'></img>
          <img src={'/assets/images/fourwayslogo.png'} draggable={false} className='absolute hidden tablet1:flex left-1 tablet1:left-auto opacity-50 tablet1:opacity-100 tablet1:right-16 top-0 tablet1:bottom-0 w-[55%] h-auto' />
          <div className='text-center s3-text-sectiontitle skew-y-[4deg] tablet1:skew-y-[-4deg] float-right mt-4 tablet1:mt-0'>Four ways to<br className='inline tablet1:hidden' /> generate<br className='inline tablet1:hidden' /> revenue</div>
        </div>
        <img src='/assets/images/fourwaystitle.png' className='hidden tablet1:block w-[50%] h-fit my-auto' draggable='false'></img>
        <div className='justify-end tablet1:flex tablet1:flex-col font-smpx text-[18px] tablet1:text-[20px] w-[80%] leading-5 clear-both'>
          <div className='text-left tablet1:text-justify text-[14px] tablet1:text-[22px] leading-3 tablet1:leading-7 w-[45%] tablet1:w-full float-right tablet1:float-none -mr-[56px]'>
            All supplied liquidity is going into the treasury, backing the UCD value and swaps into other stablecoins (if needed).
          </div>
          <div className='hidden grid-flow-row gap-[2px] tablet1:grid'>
            <br />
            <div className='flex px-3 py-3 bg-repeat-round bg-cover bg-suppliedliquidity'>
              <div className='whitespace-nowrap'>1. BUYING&nbsp;&nbsp;-&nbsp;</div>
              <div className='w-auto'>Liquidity when acquiring STABL3</div>
            </div>

            <div className='flex px-3 py-3 bg-repeat-round bg-cover bg-suppliedliquidity'>
              <div className='whitespace-nowrap'>2. BONDING&nbsp;-&nbsp;</div>
              <div className='w-auto'>Liquidity sold on a discount to the Protocol</div>
            </div>

            <div className='flex px-3 py-3 bg-repeat-round bg-cover bg-suppliedliquidity'>
              <div className='whitespace-nowrap'>3. LENDING&nbsp;-&nbsp;</div>
              <div className='w-auto'>Liquidity that is provided by lending</div>
            </div>

            <div className='flex px-3 py-3 bg-repeat-round bg-cover bg-suppliedliquidity'>
              <div className='whitespace-nowrap'>4. STAKING&nbsp;-&nbsp;</div>
              <div className='w-auto'>Liquidity for exchanging UCD with other stablecoins</div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      {/* Tokenomics */}
      <div className='clear-both text-center mx-auto tablet1:w-[75%]'>
        <div className='s3-text-sectiontitle'>TOKENOMICS</div>
        <div className='px-3 py-4 mx-auto bg-repeat-round bg-cover s3-text-normal tablet1:px-8 bg-tokenomics_description tablet1:bg-none'>
          The protocol is built as a revenue-sharing model where all the fees collected are distributed to the protocol’s participants allowing one of the highest stablecoin returns on the market.
        </div>
        <div className='flex justify-between mt-4 font-smpx'>
          <div className='w-[57%]'>
            <div className='tracking-widest text-[14px] tablet1:text-[24px]'>100.000.000.000 $STABL3</div>
            <div className='text-[12px] tablet1:text-[22px]'>
              <div className='py-0 bg-repeat-round bg-cover tablet1:py-1 bg-tokenomics_1'>100% Circulating Supply</div>
              <div className='py-0 bg-repeat-round bg-cover tablet1:py-1 bg-tokenomics_2'>99% Community Owned</div>
              <div className='py-0 bg-repeat-round bg-cover tablet1:py-1 bg-tokenomics_3'>Only 1% Team Tokens</div>
              <div className='px-4 py-2 leading-3 bg-repeat-round bg-cover tablet1:py-8 bg-tokenomics_4 tablet1:leading-8'>
                2-6% Fees <br />
                Maintenance: development, marketing, operations. <br />
                Community ROI: transactions, unstaking, stablecoin minting, loan payback
              </div>
            </div>
          </div>
          <div className='w-[165px] h-[175px] tablet1:w-[400px] tablet1:h-[379px] relative tracking-normal tablet1:tracking-widest'>
            <Image src={'/assets/images/feedistribution.png'} width={461} height={435} layout='responsive' draggable={false} />
            {/* <div className='absolute top-0 tablet1:top-[4px] w-full text-center font-smpx text-[12px] tablet1:text-[24px] leading-3 tablet1:leading-6'>
              FEE DISTRIBUTION
            </div> */}
            <div className='absolute top-[24px] tablet1:top-[80px] left-[37px] tablet1:left-[76px] w-[91px] tablet1:w-[248px] text-center font-smpx text-[12px] tablet1:text-[24px] leading-3 tablet1:leading-6'>
              Development,<br />
              Marketing,<br />
              Operations<br />
              10%
            </div>
            <div className='absolute top-[100px] tablet1:top-[260px] w-full text-center font-smpx text-[12px] tablet1:text-[28px] leading-3 tablet1:leading-6 tracking-widest'>
              COMMUNITY ROI<br />
              90%
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* Roadmap 2022 */}
      <div className='mx-auto w-full tablet1:w-[95%]'>
        <Roadmap2022Title />
        <div className='flex flex-row mt-4 tablet1:flex-col'>
          <div className='block tablet1:hidden w-[300px] h-[600px]'>
            <img src='/assets/images/roadmap_vertical.png' className='w-full h-auto'></img>
          </div>
          <div className='hidden w-full tablet1:block'>
            <img src='/assets/images/roadmap_horizontal.png' className='w-full h-auto'></img>
          </div>
          <div className='flex flex-col tablet1:flex-row text-[14px] tablet1:text-[22px] leading-3 tablet1:leading-6 font-smpx pl-0 pt-11 tablet1:pl-4 tablet1:pt-2'>
            <div className='basis-1/4'> {q1} </div>
            <div className='basis-1/4'> {q2} </div>
            <div className='basis-1/4'> {q3} </div>
            <div className='basis-1/4'> {q4} </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-10 gap-11'>
        <BecomeAnEarlyInvestor className='text-[22px]'></BecomeAnEarlyInvestor>
      </div>
      <Footer />
    </div>
  )
}