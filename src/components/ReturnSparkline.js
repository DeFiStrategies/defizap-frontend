import React, { useState, useEffect } from 'react';

// Sparklines
import { Sparklines, SparklinesLine } from 'react-sparklines';

// Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Helpers
// import { format } from '../../helpers.js';

export const periodFromTabValue = tabValue => {
  let period = 30;
  if (tabValue === 0) period = 7;
  else if (tabValue === 1) period = 30;
  else if (tabValue === 2) period = 90;

  return 90;
  //   return period;
};

const ReturnSparkLine = ({ exchange, periodTabValue }) => {
  const period = periodFromTabValue(periodTabValue);
  const dataSource = `https://api.blocklytics.org/uniswap/v1/returns/${exchange}?daysBack=${period}&period=${period}&key=AIzaSyBsxPbH_lMrxwVWpXsORNaHzQ3OVbTdJGo`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;

    fetch(dataSource, { signal })
      .then(r => r.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError')
          console.log(
            `Fetching failed \`ReturnSparkLine\` {${exchange}, ${period}}.`
          );
      });

    return () => controller.abort();
  }, [dataSource, exchange, period]);

  const dataKey = `D${period}_annualized`;
  const dataLastValue =
    data && data.length > 0 && data[data.length - 1][dataKey];

  return loading ? (
    <Grid item xs={12}>
      <Typography
        variant="caption"
        align="center"
        style={{ lineHeight: '40px', width: '100%' }}
      >
        {' '}
      </Typography>
    </Grid>
  ) : (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      style={{ flexWrap: 'nowrap' }}
    >
      <Grid item xs={9}>
        <Sparklines
          data={data.map(e => e[dataKey])}
          svgWidth={160}
          svgHeight={36}
          min={0}
          margin={3}
          style={{ width: '100%' }}
        >
          <SparklinesLine color="#e91e63" style={{ strokeWidth: 3 }} />
        </Sparklines>
      </Grid>
      <Grid item xs={3}>
        <Typography
          variant="body1"
          align="right"
          style={{ lineHeight: '40px' }}
        >
          {/**
          dataLastValue ? `${format(dataLastValue, 1)}%` : '-'
          */}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReturnSparkLine;
