import React from 'react';

import styles from './Header.less';

const NavList = [
    {
        label: '首页',
        key: 'index',
    },
    {
        label: '关于无锡',
        key: 'about',
    },
    {
        label: '旅客指南',
        key: 'guide',
    },
    {
        label: '注册',
        key: 'register',
    },
    {
        label: '登录',
        key: 'login',
    },
    {
        label: '发布房源',
        key: 'listing',
    },
]


const Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <img className={styles.logo} src={require('@/assets/img/logo.png')} />
                <span className={styles.title}> 无锡共享民宿 </span>
            </div>
            <div className={styles.right}>
                <ul className={styles.ul}>
                    {NavList.map(item => <li {...item} key={item.key}>{ item.label }</li>)}
                   
                </ul>
            </div>

        </div>
    );
};

export default Header;
