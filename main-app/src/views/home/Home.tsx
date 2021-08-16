import './style.styl';
import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import registerApp, { microApps, globalActions } from '@/registerApp';

const Home: FC = () => {
    useEffect(() => {
        // 注册
        registerApp(microApps);
        globalActions.setGlobalState({ msg: '我给微应用传递参数' });

        globalActions.onGlobalStateChange((state, prev) => {
            // state: 变更后的状态; prev 变更前的状态
        });
    }, []);
    return (
        <div className="saas-home">
            <header>
                <span>microservice</span>
                {microApps.map((app) => (
                    <Link key={app.name} to={app.activeRule}>
                        微应用：
                        {app.name}
                    </Link>
                ))}
            </header>
            <main id="microApp">
                microApp
            </main>
        </div>
    );
};

export default Home;
