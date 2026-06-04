const { sumTokensExport } = require('../helper/chain/cardano');

// ADA Harvest - Cardano PlutusV3 flash loan vault + yield aggregator
// Vault address (base address, delegates to a stake pool):
//   addr1z89u29sdr6aazr6v9zhdk6vh4az75enlzph2372v3tq55usgucktr6zta3rtuqlqam4395sry3vl5c7ss08m50qtnj6skjfx7y
// Docs: https://ada-harvest.com

const VAULT_ADDRESS = 'addr1z89u29sdr6aazr6v9zhdk6vh4az75enlzph2372v3tq55usgucktr6zta3rtuqlqam4395sry3vl5c7ss08m50qtnj6skjfx7y';

module.exports = {
  // Vault funds may later be deployed into Minswap/Liqwid, which have their own
  // adapters, so flag as double-counted to avoid inflating total Cardano TVL.
  doublecounted: true,
  methodology:
    'Counts only the ADA (lovelace) locked in the ADA Harvest PlutusV3 vault contract. ' +
    'Non-ADA assets are excluded. The vault earns flash loan fees and ADA staking rewards.',
  cardano: {
    tvl: sumTokensExport({ scripts: [VAULT_ADDRESS], tokens: ['lovelace'] }),
  },
};
