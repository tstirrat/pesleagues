// tslint:disable:no-use-before-declare
import * as React from 'react';
import { pure } from 'recompose';

import { Player } from '../../shared/service/api';

export interface Props {
  player: Player;
  width?: number;
  height?: number;
}

/**
 * Renders a player's preferred foot incl. weak foot information.
 *
 * TODO: Find a way to indicate weak foot strength (and "usage"?) in the chart
 */
export const FootChart = pure<Props>(({ player, width, height = 28 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 58">
      {player.preferredFoot ? <Left /> : <Right />}
    </svg>
  );
});

// tslint:disable:max-line-length
const Left = pure(() => {
  return (
    <g
      id="FootChart/left"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M54.6756662,0.0431021807 C39.9449719,-0.874018983 32.2252051,13.0107299 35.9140831,25.8382121 C37.1353627,30.0850163 40.8897803,32.5376056 42.5687224,36.6251504 C45.1748206,42.9699455 43.4286446,59.9211487 57.6435406,56.793889 C63.9849756,55.3987812 64.6024555,46.1442505 62.6472651,41.68432 C60.0093004,35.6669324 51.1066788,32.1296186 51.368874,25.2573443 C51.6359475,18.257206 59.7084193,21.4388231 62.6472651,14.6458562 C65.9407817,7.0330886 59.1347012,0.320718109 54.6756662,0.0431021807 Z"
          id="path-1"
        />
        <path
          d="M19.6756662,0.0431021807 C4.94497186,-0.874018983 -2.77479494,13.0107299 0.914083089,25.8382121 C2.13536268,30.0850163 5.8897803,32.5376056 7.56872235,36.6251504 C10.1748206,42.9699455 8.42864457,59.9211487 22.6435406,56.793889 C28.9849756,55.3987812 29.6024555,46.1442505 27.6472651,41.68432 C25.0093004,35.6669324 16.1066788,32.1296186 16.368874,25.2573443 C16.6359475,18.257206 24.7084193,21.4388231 27.6472651,14.6458562 C30.9407817,7.0330886 24.1347012,0.320718109 19.6756662,0.0431021807 Z"
          id="path-2"
        />
      </defs>
      <g
        id="Left"
        transform="translate(49.315352, 28.587581) scale(-1, 1) translate(-49.315352, -28.587581) "
      >
        <use fill="#B8B8B8" fillRule="evenodd" xlinkHref="#path-1" />
        <path
          stroke="#4A4A4A"
          strokeWidth="1"
          d="M54.6445968,0.542135937 C41.0254772,-0.305779475 32.5626463,12.3749916 36.394608,25.7000246 C36.9084268,27.4867471 37.7161993,28.7693048 39.6438858,31.212162 C39.7472879,31.3431442 39.7472879,31.3431442 39.8509717,31.4744388 C41.6015665,33.6917485 42.3747941,34.8370295 43.0312271,36.4351785 C43.531142,37.652269 43.8620043,39.0864713 44.3366425,41.7753704 C44.3646055,41.9337853 44.6000733,43.2826904 44.6721157,43.6867568 C44.8050987,44.4326227 44.9207195,45.0492574 45.0401464,45.6398651 C46.8095494,54.3901845 49.973108,57.9694179 57.5361103,56.3055667 C62.7001344,55.1694877 64.5321118,47.2291115 62.1893363,41.8850716 C61.329823,39.9244598 60.0801478,38.4811209 57.0227776,35.5532334 C56.8636793,35.4008981 56.8636793,35.4008981 56.7045042,35.2484122 C52.3023416,31.0294902 50.7355477,28.7423612 50.8692375,25.2382819 C50.9931676,21.9900079 52.3354853,20.7435708 55.9020985,19.3783208 C55.9328844,19.3665364 56.4660152,19.1634102 56.6225668,19.1030808 C56.8976795,18.9970622 57.1251449,18.9070414 57.3424956,18.8174505 C59.8053501,17.8022737 61.2418148,16.6352294 62.1883697,14.447324 C64.9248128,8.1221988 59.896273,0.869101065 54.6445968,0.542135937 Z"
        />
      </g>
      <g id="Right">
        <use fill="#1DE9E6" fillRule="evenodd" xlinkHref="#path-2" />
        <path
          stroke="#4A4A4A"
          strokeWidth="1"
          d="M19.6445968,0.542135937 C6.02547722,-0.305779475 -2.43735373,12.3749916 1.39460802,25.7000246 C1.90842679,27.4867471 2.71619926,28.7693048 4.64388584,31.212162 C4.74728795,31.3431442 4.74728795,31.3431442 4.85097174,31.4744388 C6.6015665,33.6917485 7.37479406,34.8370295 8.03122713,36.4351785 C8.531142,37.652269 8.86200429,39.0864713 9.3366425,41.7753704 C9.36460553,41.9337853 9.60007327,43.2826904 9.67211568,43.6867568 C9.80509871,44.4326227 9.92071951,45.0492574 10.0401464,45.6398651 C11.8095494,54.3901845 14.973108,57.9694179 22.5361103,56.3055667 C27.7001344,55.1694877 29.5321118,47.2291115 27.1893363,41.8850716 C26.329823,39.9244598 25.0801478,38.4811209 22.0227776,35.5532334 C21.8636793,35.4008981 21.8636793,35.4008981 21.7045042,35.2484122 C17.3023416,31.0294902 15.7355477,28.7423612 15.8692375,25.2382819 C15.9931676,21.9900079 17.3354853,20.7435708 20.9020985,19.3783208 C20.9328844,19.3665364 21.4660152,19.1634102 21.6225668,19.1030808 C21.8976795,18.9970622 22.1251449,18.9070414 22.3424956,18.8174505 C24.8053501,17.8022737 26.2418148,16.6352294 27.1883697,14.447324 C29.9248128,8.1221988 24.896273,0.869101065 19.6445968,0.542135937 Z"
        />
      </g>
    </g>
  );
});
const Right = pure(() => {
  return (
    <g
      id="FootChart/right"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M19.6756662,0.0431021807 C4.94497186,-0.874018983 -2.77479494,13.0107299 0.914083089,25.8382121 C2.13536268,30.0850163 5.8897803,32.5376056 7.56872235,36.6251504 C10.1748206,42.9699455 8.42864457,59.9211487 22.6435406,56.793889 C28.9849756,55.3987812 29.6024555,46.1442505 27.6472651,41.68432 C25.0093004,35.6669324 16.1066788,32.1296186 16.368874,25.2573443 C16.6359475,18.257206 24.7084193,21.4388231 27.6472651,14.6458562 C30.9407817,7.0330886 24.1347012,0.320718109 19.6756662,0.0431021807 Z"
          id="path-1"
        />
        <path
          d="M54.6756662,0.0431021807 C39.9449719,-0.874018983 32.2252051,13.0107299 35.9140831,25.8382121 C37.1353627,30.0850163 40.8897803,32.5376056 42.5687224,36.6251504 C45.1748206,42.9699455 43.4286446,59.9211487 57.6435406,56.793889 C63.9849756,55.3987812 64.6024555,46.1442505 62.6472651,41.68432 C60.0093004,35.6669324 51.1066788,32.1296186 51.368874,25.2573443 C51.6359475,18.257206 59.7084193,21.4388231 62.6472651,14.6458562 C65.9407817,7.0330886 59.1347012,0.320718109 54.6756662,0.0431021807 Z"
          id="path-2"
        />
      </defs>
      <g id="Left">
        <use fill="#B8B8B8" fillRule="evenodd" xlinkHref="#path-1" />
        <path
          stroke="#4A4A4A"
          strokeWidth="1"
          d="M19.6445968,0.542135937 C6.02547722,-0.305779475 -2.43735373,12.3749916 1.39460802,25.7000246 C1.90842679,27.4867471 2.71619926,28.7693048 4.64388584,31.212162 C4.74728795,31.3431442 4.74728795,31.3431442 4.85097174,31.4744388 C6.6015665,33.6917485 7.37479406,34.8370295 8.03122713,36.4351785 C8.531142,37.652269 8.86200429,39.0864713 9.3366425,41.7753704 C9.36460553,41.9337853 9.60007327,43.2826904 9.67211568,43.6867568 C9.80509871,44.4326227 9.92071951,45.0492574 10.0401464,45.6398651 C11.8095494,54.3901845 14.973108,57.9694179 22.5361103,56.3055667 C27.7001344,55.1694877 29.5321118,47.2291115 27.1893363,41.8850716 C26.329823,39.9244598 25.0801478,38.4811209 22.0227776,35.5532334 C21.8636793,35.4008981 21.8636793,35.4008981 21.7045042,35.2484122 C17.3023416,31.0294902 15.7355477,28.7423612 15.8692375,25.2382819 C15.9931676,21.9900079 17.3354853,20.7435708 20.9020985,19.3783208 C20.9328844,19.3665364 21.4660152,19.1634102 21.6225668,19.1030808 C21.8976795,18.9970622 22.1251449,18.9070414 22.3424956,18.8174505 C24.8053501,17.8022737 26.2418148,16.6352294 27.1883697,14.447324 C29.9248128,8.1221988 24.896273,0.869101065 19.6445968,0.542135937 Z"
        />
      </g>
      <g
        id="Right"
        transform="translate(49.315352, 28.587581) scale(-1, 1) translate(-49.315352, -28.587581) "
      >
        <use fill="#1DE9E6" fillRule="evenodd" xlinkHref="#path-2" />
        <path
          stroke="#4A4A4A"
          strokeWidth="1"
          d="M54.6445968,0.542135937 C41.0254772,-0.305779475 32.5626463,12.3749916 36.394608,25.7000246 C36.9084268,27.4867471 37.7161993,28.7693048 39.6438858,31.212162 C39.7472879,31.3431442 39.7472879,31.3431442 39.8509717,31.4744388 C41.6015665,33.6917485 42.3747941,34.8370295 43.0312271,36.4351785 C43.531142,37.652269 43.8620043,39.0864713 44.3366425,41.7753704 C44.3646055,41.9337853 44.6000733,43.2826904 44.6721157,43.6867568 C44.8050987,44.4326227 44.9207195,45.0492574 45.0401464,45.6398651 C46.8095494,54.3901845 49.973108,57.9694179 57.5361103,56.3055667 C62.7001344,55.1694877 64.5321118,47.2291115 62.1893363,41.8850716 C61.329823,39.9244598 60.0801478,38.4811209 57.0227776,35.5532334 C56.8636793,35.4008981 56.8636793,35.4008981 56.7045042,35.2484122 C52.3023416,31.0294902 50.7355477,28.7423612 50.8692375,25.2382819 C50.9931676,21.9900079 52.3354853,20.7435708 55.9020985,19.3783208 C55.9328844,19.3665364 56.4660152,19.1634102 56.6225668,19.1030808 C56.8976795,18.9970622 57.1251449,18.9070414 57.3424956,18.8174505 C59.8053501,17.8022737 61.2418148,16.6352294 62.1883697,14.447324 C64.9248128,8.1221988 59.896273,0.869101065 54.6445968,0.542135937 Z"
        />
      </g>
    </g>
  );
});