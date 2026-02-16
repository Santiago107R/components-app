import React from 'react'
import { View } from 'react-native'
import MenuItem from '@/presentation/menu/MenuItem'
import ThemeView from '@/presentation/shared/ThemeView'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'

const ComponentsApp = () => {
    return (
        <ThemeView margin>

            {
                animationMenuRoutes.map((route, index) => (
                    <MenuItem
                        key={route.title}
                        title={route.title}
                        name={route.name}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === animationMenuRoutes.length - 1}
                    />
                ))
            }

            <View className="my-3" />

            {
                uiMenuRoutes.map((route, index) => (
                    <MenuItem
                        key={route.title}
                        title={route.title}
                        name={route.name}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === uiMenuRoutes.length - 1}
                    />
                ))
            }

            <View className="my-3" />

            {
                menuRoutes.map((route, index) => (
                    <MenuItem
                        key={route.title}
                        title={route.title}
                        name={route.name}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === menuRoutes.length - 1}
                    />
                ))
            }
        </ThemeView>
    )
}

export default ComponentsApp