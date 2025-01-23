export const districts = ['Gasabo', 'Kicukiro', 'Nyarugenge'];

export const demandData = [
  {
    district: 'Gasabo',
    demand: 500,
    timestamp: new Date('2023-10-01T08:00:00'),
  },
  {
    district: 'Kicukiro',
    demand: 300,
    timestamp: new Date('2023-10-01T09:00:00'),
  },
  {
    district: 'Nyarugenge',
    demand: 200,
    timestamp: new Date('2023-10-01T10:00:00'),
  },
  {
    district: 'Gasabo',
    demand: 450,
    timestamp: new Date('2023-10-02T08:00:00'),
  },
  {
    district: 'Kicukiro',
    demand: 350,
    timestamp: new Date('2023-10-02T09:00:00'),
  },
  {
    district: 'Nyarugenge',
    demand: 250,
    timestamp: new Date('2023-10-02T10:00:00'),
  },
];

export const metrics = {
  totalDemand: 1000, // Sum of demand across all districts
  highDemandAreas: 1, // Number of districts with demand > 400
  recentAlerts: 2, // Number of recent alerts
};