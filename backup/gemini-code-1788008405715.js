document.addEventListener('DOMContentLoaded', () => {
  const regions = document.querySelectorAll('.svg-map-container [data-region]');
  const infoBox = document.getElementById('regionInfoBox');

  const regionDetails = {
    'africa': 'Uganda & East Africa: Sourcing Hub and primary export operations base.',
    'middle-east': 'Middle East: Strategic B2B trade hub for Coffee, Cocoa, and Oudh Alanfar.',
    'asia': 'Asia: Growing market destination for high-grade agricultural commodities.',
    'europe': 'Europe: Target market for premium washed coffee and natural vanilla imports.'
  };

  regions.forEach(region => {
    region.addEventListener('mouseenter', (e) => {
      const regionId = e.target.getAttribute('data-region');
      if (infoBox && regionDetails[regionId]) {
        infoBox.textContent = regionDetails[regionId];
      }
    });

    region.addEventListener('click', (e) => {
      const regionId = e.target.getAttribute('data-region');
      if (infoBox && regionDetails[regionId]) {
        infoBox.textContent = regionDetails[regionId];
      }
    });
  });
});