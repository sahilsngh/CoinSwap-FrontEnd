import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Swap_app.module.css';
import { Dogecoin_doge_logoIcon } from './SVG/Dogecoin_doge_logoIcon';
import { DogecoinDogeLogoIcon } from './SVG/DogecoinDogeLogoIcon';
import { Heart } from './Heart/Heart';
import { HourglassIcon } from './SVG/HourglassIcon';
import { InformationCircleIcon } from './SVG/InformationCircleIcon';
import { Ms_coinIcon } from './SVG/Ms_coinIcon';
import { StakeIcon } from './SVG/StakeIcon';
import { TradeUpIcon } from './SVG/TradeUpIcon';
import { WalletAddIcon } from './SVG/WalletAddIcon';
import { WalletAddIcon2 } from './SVG/WalletAddIcon2';
import { WalletAdd_StyleLinear } from './WalletAdd_StyleLinear/WalletAdd_StyleLinear';

interface Props {
  className?: string;
}
/* @figmaId 2067:644 */
export const Swap_app: FC<Props> = memo(function Swap_app(props = {}) {
  return (
    <div className={`${resets.webViewResets} ${classes.root}`}>
      <div className={classes.about}>
        <div className={classes.frame1}>
          <div className={classes.product}>Product</div>
          <div className={classes.aboutProduct}>About product</div>
          <div className={classes.guide}>Guide</div>
          <div className={classes.frame}>
            <div className={classes.joinDiscord}>Join Discord</div>
            <div className={classes.discord}></div>
          </div>
        </div>
      </div>
      <div className={classes.ellipse}></div>
      <div className={classes.frame2}>
        <div className={classes.frame3}></div>
        <div className={classes.theUltimatePlatformForTurningC}>
          <div className={classes.textBlock}>The ultimate platform for turning coins into long-term gains. </div>
          <div className={classes.textBlock2}>
            Stake, hold, and grow your assets with strategies designed for degen investors
          </div>
        </div>
      </div>
      <div className={classes.metaborong}>2024 @metaborong all rights reserved</div>
      <div className={classes.board}>
        <div className={classes.recieveCard}>
          <div className={classes.receiving_card_contener}>
            <div className={classes.receiver_head}>
              <div className={classes.receive}>Receive</div>
              <div className={classes.receiving_coin_balance}>
                <div className={classes.msDOGEBalance00DOGE}>ms DOGE Balance: 0.000 DOGE</div>
              </div>
            </div>
            <div className={classes.frame1437253046}>
              <div className={classes.receiving_coin_value_placehold}>
                <div className={classes._0}>0.00</div>
              </div>
              <div className={classes.receiving_coin_selector}>
                <div className={classes.frame1437253033}>
                  <div className={classes.frame1437253032}>
                    <div className={classes.group733}>
                      <div className={classes.ms_coin}>
                        <Ms_coinIcon className={classes.icon3} />
                      </div>
                      <div className={classes.dogecoin_doge_logo}>
                        <Dogecoin_doge_logoIcon className={classes.icon4} />
                      </div>
                    </div>
                    <div className={classes.msDOGE}>ms DOGE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.conversion_value_popup_orange}>
            <div className={classes._1DOGE890MsDOGE}>1 DOGE = 0.890 ms DOGE</div>
          </div>
        </div>
        <div className={classes.depositCard}>
          <div className={classes.deposit_info_contener}>
            <div className={classes.contener_head}>
              <div className={classes.deposit}>Deposit</div>
              <div className={classes.asset_balance}>
                <div className={classes.assetBalance00DOGE}>Asset Balance: 0.000 DOGE</div>
              </div>
            </div>
            <div className={classes.deposit_info}>
              <div className={classes.desposit_coin_value}>
                <div className={classes._02}>0.00</div>
              </div>
              <div className={classes.coin_selection}>
                <div className={classes.coins}>
                  <div className={classes.frame14372530322}>
                    <div className={classes.dogecoinDogeLogo2}></div>
                    <div className={classes.dOGE}>DOGE</div>
                  </div>
                  <div className={classes.expander}></div>
                </div>
              </div>
            </div>
            <div className={classes.auto_selector}>
              <div className={classes.coin_value_dollar}>
                <div className={classes.unnamed}>$ 0</div>
              </div>
              <div className={classes.percentage_selection_contener}>
                <div className={classes.linear_slide}>
                  <div className={classes.straight}></div>
                </div>
                <div className={classes.rectangle_3}></div>
                <div className={classes.rectangle_2}></div>
                <div className={classes.rectangle_1}></div>
                <div className={classes.dogecoinDogeLogo}>
                  <DogecoinDogeLogoIcon className={classes.icon5} />
                </div>
                <div className={classes.perc_values}>
                  <div className={classes.min}>min</div>
                  <div className={classes._25}>25%</div>
                  <div className={classes._75}>75%</div>
                  <div className={classes.max}>max</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame1437253037}>
          <div className={classes.values_fee_info}>
            <div className={classes.value_fee}>
              <div className={classes.informationCircle}>
                <InformationCircleIcon className={classes.icon6} />
              </div>
              <div className={classes.vaultEntryFees}>Vault entry fees</div>
            </div>
            <div className={classes._80}>0.80%</div>
          </div>
        </div>
        <button className={classes.connect_wallet_button}>
          <div className={classes.label}>
            <div className={classes.label2}>Connect wallet</div>
            <WalletAdd_StyleLinear
              className={classes.walletAdd}
              classes={{ vuesaxLinearWalletAdd: classes.vuesaxLinearWalletAdd }}
              swap={{
                vuesaxLinearWalletAdd: (
                  <div className={classes.vuesaxLinearWalletAdd}>
                    <WalletAddIcon className={classes.icon} />
                  </div>
                ),
              }}
            />
          </div>
        </button>
      </div>
      <div className={classes.txns_modes}>
        <div className={classes.active}>
          <div className={classes.deposit2}>Deposit</div>
        </div>
        <div className={classes.withdraw}>Withdraw</div>
      </div>
      <div className={classes.slippage_buttn}>
        <div className={classes.slippage_value}>
          <div className={classes.setting}></div>
          <div className={classes.slippage5}>Slippage: 0.5%</div>
        </div>
      </div>
      <div className={classes.logo}></div>
      <div className={classes.conlines}></div>
      <div className={classes.analytics}>
        <div className={classes.board2}>
          <div className={classes.head}>
            <div className={classes.analytics2}>Analytics</div>
            <div className={classes.analyticsTooltip}></div>
          </div>
          <div className={classes.info_tab}>
            <div className={classes.depositCard2}>
              <div className={classes.noDataAvailable}>No data available</div>
            </div>
            <div className={classes.trade_info}>
              <div className={classes.current_price_contener}>
                <div className={classes.current_price}>
                  <div className={classes.logo2}>
                    <div className={classes.tradeUp}>
                      <TradeUpIcon className={classes.icon7} />
                    </div>
                  </div>
                  <div className={classes.placeholder}>
                    <div className={classes.currentPrice}>Current price</div>
                    <div className={classes.unnamed2}>0</div>
                  </div>
                </div>
              </div>
              <div className={classes.tvl_contener}>
                <div className={classes.tvl}>
                  <div className={classes.logo3}>
                    <div className={classes.stake}>
                      <StakeIcon className={classes.icon8} />
                    </div>
                  </div>
                  <div className={classes.placeholder2}>
                    <div className={classes.tVL}>TVL</div>
                    <div className={classes.unnamed3}>0</div>
                  </div>
                </div>
              </div>
              <div className={classes.volume_contener}>
                <div className={classes.volume}>
                  <div className={classes.logo4}>
                    <div className={classes.hourglass}>
                      <HourglassIcon className={classes.icon9} />
                    </div>
                  </div>
                  <div className={classes.placeholder3}>
                    <div className={classes._24HVolume}>24H Volume</div>
                    <div className={classes.unnamed4}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.recent_trades}>
              <div className={classes.recentTrades}>Recent Trades</div>
            </div>
            <div className={classes.txns}>
              <div className={classes.depositCard3}>
                <div className={classes.txns_slots}>
                  <div className={classes.timestamp}>Timestamp</div>
                  <div className={classes.tokenAmount}>Token amount</div>
                  <div className={classes.msTokenAmount}>msToken amount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.noDataAvailable2}>No data available</div>
      </div>
      <div className={classes.navigation}>
        <div className={classes.nav_bar}>
          <div className={classes.small_logo}></div>
          <div className={classes.nav_content}>
            <div className={classes.home}>
              <div className={classes.home_logo}></div>
              <div className={classes.home2}>Home</div>
            </div>
            <div className={classes.admin}>
              <div className={classes.admin_logo}></div>
              <div className={classes.admin2}>Admin</div>
            </div>
            <div className={classes.analytics3}>
              <div className={classes.analytics_logo}></div>
              <div className={classes.analytics4}>Analytics</div>
            </div>
            <div className={classes.giude}>
              <div className={classes.guide_logo}></div>
              <div className={classes.guide2}>Guide</div>
            </div>
            <div className={classes.about2}>
              <div className={classes.about_logo}></div>
              <div className={classes.about3}>About</div>
            </div>
          </div>
        </div>
        <div className={classes.discord_logo}></div>
      </div>
      <div className={classes.connect}>
        <button className={classes.button}>
          <div className={classes.label3}>
            <div className={classes.label4}>Connect wallet</div>
            <WalletAdd_StyleLinear
              className={classes.walletAdd2}
              classes={{ vuesaxLinearWalletAdd: classes.vuesaxLinearWalletAdd2 }}
              swap={{
                vuesaxLinearWalletAdd: (
                  <div className={classes.vuesaxLinearWalletAdd2}>
                    <WalletAddIcon2 className={classes.icon2} />
                  </div>
                ),
              }}
            />
          </div>
        </button>
      </div>
    </div>
  );
});
