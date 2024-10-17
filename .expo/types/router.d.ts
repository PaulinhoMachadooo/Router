/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/about` | `/(tabs)/categories` | `/(tabs)/categories/list` | `/(tabs)/home` | `/_sitemap` | `/about` | `/categories` | `/categories/list` | `/home`;
      DynamicRoutes: `/(tabs)/categories/${Router.SingleRoutePart<T>}` | `/categories/${Router.SingleRoutePart<T>}` | `/product/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(tabs)/categories/[id]` | `/categories/[id]` | `/product/[id]`;
    }
  }
}
