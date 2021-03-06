import runSnapshot from '../runSnapshot';
import runSnapshots from '../runSnapshots';

jest.mock('../runSnapshot', () => jest.fn(() => Promise.resolve()));

it('runs percy snapshots for each snapshot', async () => {
  const percyClient = {};
  const build = {};
  const assets = {};
  const snapshots = [
    { name: 'snapshot 1' },
    { name: 'snapshot 2' },
    { name: 'snapshot 3' },
    { name: 'snapshot 4' },
    { name: 'snapshot 5' },
    { name: 'snapshot 6' },
    { name: 'snapshot 7' },
  ];
  const renderer = jest.fn();

  await runSnapshots(percyClient, build, snapshots, assets, renderer);

  snapshots.forEach(snapshot =>
    expect(runSnapshot).toHaveBeenCalledWith(percyClient, build, snapshot, assets, renderer),
  );
});
