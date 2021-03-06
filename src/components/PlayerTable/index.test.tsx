import * as React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import { PlayerTable, Props } from '.';
import { StaticRouter } from '../../__test__';
import i18n from '../../configureI18n';
import { base } from '../../shared/__test__/fixtures';
import { Player } from '../../shared/service/api';

const player1 = Player.create({ ...base, id: 'a', name: 'Player 1', age: 21 });
const player2 = Player.create({ ...base, id: 'b', name: 'Player 2', age: 35 });

const players = [player1, player2];

let div: HTMLDivElement;

const props: Props = {
  list: players,
  selectedIndex: 1
};

describe('<PlayerTable>', () => {
  beforeEach(() => {
    div = document.createElement('div');
    render(
      <StaticRouter url="/players/1">
        <I18nextProvider i18n={i18n}>
          <PlayerTable {...props} />
        </I18nextProvider>
      </StaticRouter>,
      div
    );
  });

  it('displays all given players', () => {
    expect(div.querySelectorAll('tbody tr').length).toBe(players.length);
  });

  it('displays player name', () => {
    expect(div.querySelector('tbody td:nth-of-type(2)')!.textContent).toBe(
      player1.name
    );
  });

  it('displays player position', () => {
    expect(div.querySelector('tbody td:nth-of-type(3)')!.textContent).toContain(
      'RWF'
    );
  });

  it('displays player nationality flag', () => {
    expect(
      div.querySelector('tbody td:nth-of-type(5) img[alt=Argentina]')
    ).not.toBeNull();
  });

  it('displays player OVR', () => {
    expect(div.querySelector('tbody td:nth-of-type(6)')!.textContent).toBe(
      player1.ovr.toString()
    );
  });

  it('displays player SHT', () => {
    expect(div.querySelector('tbody td:nth-of-type(7)')!.textContent).toBe(
      player1.cardStats.SHT.toString()
    );
  });

  it('displays player PAS', () => {
    expect(div.querySelector('tbody td:nth-of-type(8)')!.textContent).toBe(
      player1.cardStats.PAS.toString()
    );
  });

  it('displays player DRI', () => {
    expect(div.querySelector('tbody td:nth-of-type(9)')!.textContent).toBe(
      player1.cardStats.DRI.toString()
    );
  });

  it('displays player DEF', () => {
    expect(div.querySelector('tbody td:nth-of-type(10)')!.textContent).toBe(
      player1.cardStats.DEF.toString()
    );
  });

  it('displays player PHY', () => {
    expect(div.querySelector('tbody td:nth-of-type(11)')!.textContent).toBe(
      player1.cardStats.PHY.toString()
    );
  });
});
