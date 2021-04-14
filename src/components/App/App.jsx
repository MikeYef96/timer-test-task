import React, { useEffect, useState } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import css from './App.module.css';

export default function App() {
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState('stop');

  useEffect(() => {
    const _unsubscribe = new Subject();
    interval(1000)
      .pipe(takeUntil(_unsubscribe))
      .subscribe(() => {
        if (status === 'run') {
          setSec(val => val + 1000);
        }
      });
    return () => {
      _unsubscribe.next();
      _unsubscribe.complete();
    };
  }, [status]);

  const onStartHandler = React.useCallback(() => {
    if (status === 'run') {
      setStatus('stop');
      setSec(0);
    } else {
      setStatus('run');
    }
  }, [status]);

  const onWaitHandler = React.useCallback(() => {
    if (status === 'run') {
      setStatus('wait');
    }
    if (status === 'wait') {
      setStatus('run');
    }
  }, [status]);

  const onResetHandler = React.useCallback(() => {
    setStatus('run');
    setSec(0);
  }, []);

  return (
    <div className={css.timer}>
      <div className={css.field}>
        <span className={css.value}>
          {new Date(sec).toISOString().slice(11, 19)}
        </span>
        <span className={css.label}>Seconds</span>
        <div className={css.btnsContainer}>
          <button className={css.startBtn} onClick={onStartHandler}>
            Start/Stop
          </button>
          <button
            className={css.waitBtn}
            onDoubleClick={interval(300) && onWaitHandler}
          >
            Wait
          </button>
          <button className={css.resetBtn} onClick={onResetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
