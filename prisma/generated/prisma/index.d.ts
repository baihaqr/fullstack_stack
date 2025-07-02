
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Kendaraan
 * 
 */
export type Kendaraan = $Result.DefaultSelection<Prisma.$KendaraanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Merek: {
  TOYOTA: 'TOYOTA',
  DAIHATSU: 'DAIHATSU',
  HONDA: 'HONDA',
  SUZUKI: 'SUZUKI'
};

export type Merek = (typeof Merek)[keyof typeof Merek]


export const Jenis: {
  SUV: 'SUV',
  MPV: 'MPV',
  SEDAN: 'SEDAN',
  CITY_CAR: 'CITY_CAR',
  PICKUP: 'PICKUP'
};

export type Jenis = (typeof Jenis)[keyof typeof Jenis]

}

export type Merek = $Enums.Merek

export const Merek: typeof $Enums.Merek

export type Jenis = $Enums.Jenis

export const Jenis: typeof $Enums.Jenis

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Kendaraans
 * const kendaraans = await prisma.kendaraan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Kendaraans
   * const kendaraans = await prisma.kendaraan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.kendaraan`: Exposes CRUD operations for the **Kendaraan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kendaraans
    * const kendaraans = await prisma.kendaraan.findMany()
    * ```
    */
  get kendaraan(): Prisma.KendaraanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Kendaraan: 'Kendaraan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "kendaraan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Kendaraan: {
        payload: Prisma.$KendaraanPayload<ExtArgs>
        fields: Prisma.KendaraanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KendaraanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KendaraanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          findFirst: {
            args: Prisma.KendaraanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KendaraanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          findMany: {
            args: Prisma.KendaraanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>[]
          }
          create: {
            args: Prisma.KendaraanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          createMany: {
            args: Prisma.KendaraanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KendaraanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>[]
          }
          delete: {
            args: Prisma.KendaraanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          update: {
            args: Prisma.KendaraanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          deleteMany: {
            args: Prisma.KendaraanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KendaraanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KendaraanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>[]
          }
          upsert: {
            args: Prisma.KendaraanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          aggregate: {
            args: Prisma.KendaraanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKendaraan>
          }
          groupBy: {
            args: Prisma.KendaraanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KendaraanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KendaraanCountArgs<ExtArgs>
            result: $Utils.Optional<KendaraanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    kendaraan?: KendaraanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Kendaraan
   */

  export type AggregateKendaraan = {
    _count: KendaraanCountAggregateOutputType | null
    _avg: KendaraanAvgAggregateOutputType | null
    _sum: KendaraanSumAggregateOutputType | null
    _min: KendaraanMinAggregateOutputType | null
    _max: KendaraanMaxAggregateOutputType | null
  }

  export type KendaraanAvgAggregateOutputType = {
    id: number | null
    jumlah_stok: number | null
    harga: number | null
  }

  export type KendaraanSumAggregateOutputType = {
    id: number | null
    jumlah_stok: number | null
    harga: number | null
  }

  export type KendaraanMinAggregateOutputType = {
    id: number | null
    merek: $Enums.Merek | null
    jenis: $Enums.Jenis | null
    jumlah_stok: number | null
    harga: number | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KendaraanMaxAggregateOutputType = {
    id: number | null
    merek: $Enums.Merek | null
    jenis: $Enums.Jenis | null
    jumlah_stok: number | null
    harga: number | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KendaraanCountAggregateOutputType = {
    id: number
    merek: number
    jenis: number
    jumlah_stok: number
    harga: number
    keterangan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KendaraanAvgAggregateInputType = {
    id?: true
    jumlah_stok?: true
    harga?: true
  }

  export type KendaraanSumAggregateInputType = {
    id?: true
    jumlah_stok?: true
    harga?: true
  }

  export type KendaraanMinAggregateInputType = {
    id?: true
    merek?: true
    jenis?: true
    jumlah_stok?: true
    harga?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KendaraanMaxAggregateInputType = {
    id?: true
    merek?: true
    jenis?: true
    jumlah_stok?: true
    harga?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KendaraanCountAggregateInputType = {
    id?: true
    merek?: true
    jenis?: true
    jumlah_stok?: true
    harga?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KendaraanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kendaraan to aggregate.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kendaraans
    **/
    _count?: true | KendaraanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KendaraanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KendaraanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KendaraanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KendaraanMaxAggregateInputType
  }

  export type GetKendaraanAggregateType<T extends KendaraanAggregateArgs> = {
        [P in keyof T & keyof AggregateKendaraan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKendaraan[P]>
      : GetScalarType<T[P], AggregateKendaraan[P]>
  }




  export type KendaraanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KendaraanWhereInput
    orderBy?: KendaraanOrderByWithAggregationInput | KendaraanOrderByWithAggregationInput[]
    by: KendaraanScalarFieldEnum[] | KendaraanScalarFieldEnum
    having?: KendaraanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KendaraanCountAggregateInputType | true
    _avg?: KendaraanAvgAggregateInputType
    _sum?: KendaraanSumAggregateInputType
    _min?: KendaraanMinAggregateInputType
    _max?: KendaraanMaxAggregateInputType
  }

  export type KendaraanGroupByOutputType = {
    id: number
    merek: $Enums.Merek
    jenis: $Enums.Jenis
    jumlah_stok: number
    harga: number
    keterangan: string | null
    createdAt: Date
    updatedAt: Date
    _count: KendaraanCountAggregateOutputType | null
    _avg: KendaraanAvgAggregateOutputType | null
    _sum: KendaraanSumAggregateOutputType | null
    _min: KendaraanMinAggregateOutputType | null
    _max: KendaraanMaxAggregateOutputType | null
  }

  type GetKendaraanGroupByPayload<T extends KendaraanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KendaraanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KendaraanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KendaraanGroupByOutputType[P]>
            : GetScalarType<T[P], KendaraanGroupByOutputType[P]>
        }
      >
    >


  export type KendaraanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merek?: boolean
    jenis?: boolean
    jumlah_stok?: boolean
    harga?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kendaraan"]>

  export type KendaraanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merek?: boolean
    jenis?: boolean
    jumlah_stok?: boolean
    harga?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kendaraan"]>

  export type KendaraanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merek?: boolean
    jenis?: boolean
    jumlah_stok?: boolean
    harga?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kendaraan"]>

  export type KendaraanSelectScalar = {
    id?: boolean
    merek?: boolean
    jenis?: boolean
    jumlah_stok?: boolean
    harga?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KendaraanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merek" | "jenis" | "jumlah_stok" | "harga" | "keterangan" | "createdAt" | "updatedAt", ExtArgs["result"]["kendaraan"]>

  export type $KendaraanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kendaraan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      merek: $Enums.Merek
      jenis: $Enums.Jenis
      jumlah_stok: number
      harga: number
      keterangan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kendaraan"]>
    composites: {}
  }

  type KendaraanGetPayload<S extends boolean | null | undefined | KendaraanDefaultArgs> = $Result.GetResult<Prisma.$KendaraanPayload, S>

  type KendaraanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KendaraanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KendaraanCountAggregateInputType | true
    }

  export interface KendaraanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kendaraan'], meta: { name: 'Kendaraan' } }
    /**
     * Find zero or one Kendaraan that matches the filter.
     * @param {KendaraanFindUniqueArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KendaraanFindUniqueArgs>(args: SelectSubset<T, KendaraanFindUniqueArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kendaraan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KendaraanFindUniqueOrThrowArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KendaraanFindUniqueOrThrowArgs>(args: SelectSubset<T, KendaraanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kendaraan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanFindFirstArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KendaraanFindFirstArgs>(args?: SelectSubset<T, KendaraanFindFirstArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kendaraan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanFindFirstOrThrowArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KendaraanFindFirstOrThrowArgs>(args?: SelectSubset<T, KendaraanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kendaraans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kendaraans
     * const kendaraans = await prisma.kendaraan.findMany()
     * 
     * // Get first 10 Kendaraans
     * const kendaraans = await prisma.kendaraan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kendaraanWithIdOnly = await prisma.kendaraan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KendaraanFindManyArgs>(args?: SelectSubset<T, KendaraanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kendaraan.
     * @param {KendaraanCreateArgs} args - Arguments to create a Kendaraan.
     * @example
     * // Create one Kendaraan
     * const Kendaraan = await prisma.kendaraan.create({
     *   data: {
     *     // ... data to create a Kendaraan
     *   }
     * })
     * 
     */
    create<T extends KendaraanCreateArgs>(args: SelectSubset<T, KendaraanCreateArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kendaraans.
     * @param {KendaraanCreateManyArgs} args - Arguments to create many Kendaraans.
     * @example
     * // Create many Kendaraans
     * const kendaraan = await prisma.kendaraan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KendaraanCreateManyArgs>(args?: SelectSubset<T, KendaraanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kendaraans and returns the data saved in the database.
     * @param {KendaraanCreateManyAndReturnArgs} args - Arguments to create many Kendaraans.
     * @example
     * // Create many Kendaraans
     * const kendaraan = await prisma.kendaraan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kendaraans and only return the `id`
     * const kendaraanWithIdOnly = await prisma.kendaraan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KendaraanCreateManyAndReturnArgs>(args?: SelectSubset<T, KendaraanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kendaraan.
     * @param {KendaraanDeleteArgs} args - Arguments to delete one Kendaraan.
     * @example
     * // Delete one Kendaraan
     * const Kendaraan = await prisma.kendaraan.delete({
     *   where: {
     *     // ... filter to delete one Kendaraan
     *   }
     * })
     * 
     */
    delete<T extends KendaraanDeleteArgs>(args: SelectSubset<T, KendaraanDeleteArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kendaraan.
     * @param {KendaraanUpdateArgs} args - Arguments to update one Kendaraan.
     * @example
     * // Update one Kendaraan
     * const kendaraan = await prisma.kendaraan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KendaraanUpdateArgs>(args: SelectSubset<T, KendaraanUpdateArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kendaraans.
     * @param {KendaraanDeleteManyArgs} args - Arguments to filter Kendaraans to delete.
     * @example
     * // Delete a few Kendaraans
     * const { count } = await prisma.kendaraan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KendaraanDeleteManyArgs>(args?: SelectSubset<T, KendaraanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kendaraans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kendaraans
     * const kendaraan = await prisma.kendaraan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KendaraanUpdateManyArgs>(args: SelectSubset<T, KendaraanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kendaraans and returns the data updated in the database.
     * @param {KendaraanUpdateManyAndReturnArgs} args - Arguments to update many Kendaraans.
     * @example
     * // Update many Kendaraans
     * const kendaraan = await prisma.kendaraan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kendaraans and only return the `id`
     * const kendaraanWithIdOnly = await prisma.kendaraan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KendaraanUpdateManyAndReturnArgs>(args: SelectSubset<T, KendaraanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kendaraan.
     * @param {KendaraanUpsertArgs} args - Arguments to update or create a Kendaraan.
     * @example
     * // Update or create a Kendaraan
     * const kendaraan = await prisma.kendaraan.upsert({
     *   create: {
     *     // ... data to create a Kendaraan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kendaraan we want to update
     *   }
     * })
     */
    upsert<T extends KendaraanUpsertArgs>(args: SelectSubset<T, KendaraanUpsertArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kendaraans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanCountArgs} args - Arguments to filter Kendaraans to count.
     * @example
     * // Count the number of Kendaraans
     * const count = await prisma.kendaraan.count({
     *   where: {
     *     // ... the filter for the Kendaraans we want to count
     *   }
     * })
    **/
    count<T extends KendaraanCountArgs>(
      args?: Subset<T, KendaraanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KendaraanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kendaraan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KendaraanAggregateArgs>(args: Subset<T, KendaraanAggregateArgs>): Prisma.PrismaPromise<GetKendaraanAggregateType<T>>

    /**
     * Group by Kendaraan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KendaraanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KendaraanGroupByArgs['orderBy'] }
        : { orderBy?: KendaraanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KendaraanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKendaraanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kendaraan model
   */
  readonly fields: KendaraanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kendaraan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KendaraanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kendaraan model
   */
  interface KendaraanFieldRefs {
    readonly id: FieldRef<"Kendaraan", 'Int'>
    readonly merek: FieldRef<"Kendaraan", 'Merek'>
    readonly jenis: FieldRef<"Kendaraan", 'Jenis'>
    readonly jumlah_stok: FieldRef<"Kendaraan", 'Int'>
    readonly harga: FieldRef<"Kendaraan", 'Float'>
    readonly keterangan: FieldRef<"Kendaraan", 'String'>
    readonly createdAt: FieldRef<"Kendaraan", 'DateTime'>
    readonly updatedAt: FieldRef<"Kendaraan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kendaraan findUnique
   */
  export type KendaraanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan findUniqueOrThrow
   */
  export type KendaraanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan findFirst
   */
  export type KendaraanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kendaraans.
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kendaraans.
     */
    distinct?: KendaraanScalarFieldEnum | KendaraanScalarFieldEnum[]
  }

  /**
   * Kendaraan findFirstOrThrow
   */
  export type KendaraanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kendaraans.
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kendaraans.
     */
    distinct?: KendaraanScalarFieldEnum | KendaraanScalarFieldEnum[]
  }

  /**
   * Kendaraan findMany
   */
  export type KendaraanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * Filter, which Kendaraans to fetch.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kendaraans.
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    distinct?: KendaraanScalarFieldEnum | KendaraanScalarFieldEnum[]
  }

  /**
   * Kendaraan create
   */
  export type KendaraanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * The data needed to create a Kendaraan.
     */
    data: XOR<KendaraanCreateInput, KendaraanUncheckedCreateInput>
  }

  /**
   * Kendaraan createMany
   */
  export type KendaraanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kendaraans.
     */
    data: KendaraanCreateManyInput | KendaraanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kendaraan createManyAndReturn
   */
  export type KendaraanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * The data used to create many Kendaraans.
     */
    data: KendaraanCreateManyInput | KendaraanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kendaraan update
   */
  export type KendaraanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * The data needed to update a Kendaraan.
     */
    data: XOR<KendaraanUpdateInput, KendaraanUncheckedUpdateInput>
    /**
     * Choose, which Kendaraan to update.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan updateMany
   */
  export type KendaraanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kendaraans.
     */
    data: XOR<KendaraanUpdateManyMutationInput, KendaraanUncheckedUpdateManyInput>
    /**
     * Filter which Kendaraans to update
     */
    where?: KendaraanWhereInput
    /**
     * Limit how many Kendaraans to update.
     */
    limit?: number
  }

  /**
   * Kendaraan updateManyAndReturn
   */
  export type KendaraanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * The data used to update Kendaraans.
     */
    data: XOR<KendaraanUpdateManyMutationInput, KendaraanUncheckedUpdateManyInput>
    /**
     * Filter which Kendaraans to update
     */
    where?: KendaraanWhereInput
    /**
     * Limit how many Kendaraans to update.
     */
    limit?: number
  }

  /**
   * Kendaraan upsert
   */
  export type KendaraanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * The filter to search for the Kendaraan to update in case it exists.
     */
    where: KendaraanWhereUniqueInput
    /**
     * In case the Kendaraan found by the `where` argument doesn't exist, create a new Kendaraan with this data.
     */
    create: XOR<KendaraanCreateInput, KendaraanUncheckedCreateInput>
    /**
     * In case the Kendaraan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KendaraanUpdateInput, KendaraanUncheckedUpdateInput>
  }

  /**
   * Kendaraan delete
   */
  export type KendaraanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
    /**
     * Filter which Kendaraan to delete.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan deleteMany
   */
  export type KendaraanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kendaraans to delete
     */
    where?: KendaraanWhereInput
    /**
     * Limit how many Kendaraans to delete.
     */
    limit?: number
  }

  /**
   * Kendaraan without action
   */
  export type KendaraanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kendaraan
     */
    omit?: KendaraanOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KendaraanScalarFieldEnum: {
    id: 'id',
    merek: 'merek',
    jenis: 'jenis',
    jumlah_stok: 'jumlah_stok',
    harga: 'harga',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KendaraanScalarFieldEnum = (typeof KendaraanScalarFieldEnum)[keyof typeof KendaraanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Merek'
   */
  export type EnumMerekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Merek'>
    


  /**
   * Reference to a field of type 'Merek[]'
   */
  export type ListEnumMerekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Merek[]'>
    


  /**
   * Reference to a field of type 'Jenis'
   */
  export type EnumJenisFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jenis'>
    


  /**
   * Reference to a field of type 'Jenis[]'
   */
  export type ListEnumJenisFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jenis[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type KendaraanWhereInput = {
    AND?: KendaraanWhereInput | KendaraanWhereInput[]
    OR?: KendaraanWhereInput[]
    NOT?: KendaraanWhereInput | KendaraanWhereInput[]
    id?: IntFilter<"Kendaraan"> | number
    merek?: EnumMerekFilter<"Kendaraan"> | $Enums.Merek
    jenis?: EnumJenisFilter<"Kendaraan"> | $Enums.Jenis
    jumlah_stok?: IntFilter<"Kendaraan"> | number
    harga?: FloatFilter<"Kendaraan"> | number
    keterangan?: StringNullableFilter<"Kendaraan"> | string | null
    createdAt?: DateTimeFilter<"Kendaraan"> | Date | string
    updatedAt?: DateTimeFilter<"Kendaraan"> | Date | string
  }

  export type KendaraanOrderByWithRelationInput = {
    id?: SortOrder
    merek?: SortOrder
    jenis?: SortOrder
    jumlah_stok?: SortOrder
    harga?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KendaraanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KendaraanWhereInput | KendaraanWhereInput[]
    OR?: KendaraanWhereInput[]
    NOT?: KendaraanWhereInput | KendaraanWhereInput[]
    merek?: EnumMerekFilter<"Kendaraan"> | $Enums.Merek
    jenis?: EnumJenisFilter<"Kendaraan"> | $Enums.Jenis
    jumlah_stok?: IntFilter<"Kendaraan"> | number
    harga?: FloatFilter<"Kendaraan"> | number
    keterangan?: StringNullableFilter<"Kendaraan"> | string | null
    createdAt?: DateTimeFilter<"Kendaraan"> | Date | string
    updatedAt?: DateTimeFilter<"Kendaraan"> | Date | string
  }, "id">

  export type KendaraanOrderByWithAggregationInput = {
    id?: SortOrder
    merek?: SortOrder
    jenis?: SortOrder
    jumlah_stok?: SortOrder
    harga?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KendaraanCountOrderByAggregateInput
    _avg?: KendaraanAvgOrderByAggregateInput
    _max?: KendaraanMaxOrderByAggregateInput
    _min?: KendaraanMinOrderByAggregateInput
    _sum?: KendaraanSumOrderByAggregateInput
  }

  export type KendaraanScalarWhereWithAggregatesInput = {
    AND?: KendaraanScalarWhereWithAggregatesInput | KendaraanScalarWhereWithAggregatesInput[]
    OR?: KendaraanScalarWhereWithAggregatesInput[]
    NOT?: KendaraanScalarWhereWithAggregatesInput | KendaraanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kendaraan"> | number
    merek?: EnumMerekWithAggregatesFilter<"Kendaraan"> | $Enums.Merek
    jenis?: EnumJenisWithAggregatesFilter<"Kendaraan"> | $Enums.Jenis
    jumlah_stok?: IntWithAggregatesFilter<"Kendaraan"> | number
    harga?: FloatWithAggregatesFilter<"Kendaraan"> | number
    keterangan?: StringNullableWithAggregatesFilter<"Kendaraan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Kendaraan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kendaraan"> | Date | string
  }

  export type KendaraanCreateInput = {
    merek: $Enums.Merek
    jenis: $Enums.Jenis
    jumlah_stok: number
    harga: number
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KendaraanUncheckedCreateInput = {
    id?: number
    merek: $Enums.Merek
    jenis: $Enums.Jenis
    jumlah_stok: number
    harga: number
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KendaraanUpdateInput = {
    merek?: EnumMerekFieldUpdateOperationsInput | $Enums.Merek
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    jumlah_stok?: IntFieldUpdateOperationsInput | number
    harga?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KendaraanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    merek?: EnumMerekFieldUpdateOperationsInput | $Enums.Merek
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    jumlah_stok?: IntFieldUpdateOperationsInput | number
    harga?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KendaraanCreateManyInput = {
    id?: number
    merek: $Enums.Merek
    jenis: $Enums.Jenis
    jumlah_stok: number
    harga: number
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KendaraanUpdateManyMutationInput = {
    merek?: EnumMerekFieldUpdateOperationsInput | $Enums.Merek
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    jumlah_stok?: IntFieldUpdateOperationsInput | number
    harga?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KendaraanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    merek?: EnumMerekFieldUpdateOperationsInput | $Enums.Merek
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    jumlah_stok?: IntFieldUpdateOperationsInput | number
    harga?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumMerekFilter<$PrismaModel = never> = {
    equals?: $Enums.Merek | EnumMerekFieldRefInput<$PrismaModel>
    in?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    not?: NestedEnumMerekFilter<$PrismaModel> | $Enums.Merek
  }

  export type EnumJenisFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisFilter<$PrismaModel> | $Enums.Jenis
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KendaraanCountOrderByAggregateInput = {
    id?: SortOrder
    merek?: SortOrder
    jenis?: SortOrder
    jumlah_stok?: SortOrder
    harga?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KendaraanAvgOrderByAggregateInput = {
    id?: SortOrder
    jumlah_stok?: SortOrder
    harga?: SortOrder
  }

  export type KendaraanMaxOrderByAggregateInput = {
    id?: SortOrder
    merek?: SortOrder
    jenis?: SortOrder
    jumlah_stok?: SortOrder
    harga?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KendaraanMinOrderByAggregateInput = {
    id?: SortOrder
    merek?: SortOrder
    jenis?: SortOrder
    jumlah_stok?: SortOrder
    harga?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KendaraanSumOrderByAggregateInput = {
    id?: SortOrder
    jumlah_stok?: SortOrder
    harga?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumMerekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Merek | EnumMerekFieldRefInput<$PrismaModel>
    in?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    not?: NestedEnumMerekWithAggregatesFilter<$PrismaModel> | $Enums.Merek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMerekFilter<$PrismaModel>
    _max?: NestedEnumMerekFilter<$PrismaModel>
  }

  export type EnumJenisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisWithAggregatesFilter<$PrismaModel> | $Enums.Jenis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisFilter<$PrismaModel>
    _max?: NestedEnumJenisFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMerekFieldUpdateOperationsInput = {
    set?: $Enums.Merek
  }

  export type EnumJenisFieldUpdateOperationsInput = {
    set?: $Enums.Jenis
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumMerekFilter<$PrismaModel = never> = {
    equals?: $Enums.Merek | EnumMerekFieldRefInput<$PrismaModel>
    in?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    not?: NestedEnumMerekFilter<$PrismaModel> | $Enums.Merek
  }

  export type NestedEnumJenisFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisFilter<$PrismaModel> | $Enums.Jenis
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumMerekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Merek | EnumMerekFieldRefInput<$PrismaModel>
    in?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    notIn?: $Enums.Merek[] | ListEnumMerekFieldRefInput<$PrismaModel>
    not?: NestedEnumMerekWithAggregatesFilter<$PrismaModel> | $Enums.Merek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMerekFilter<$PrismaModel>
    _max?: NestedEnumMerekFilter<$PrismaModel>
  }

  export type NestedEnumJenisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis[] | ListEnumJenisFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisWithAggregatesFilter<$PrismaModel> | $Enums.Jenis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisFilter<$PrismaModel>
    _max?: NestedEnumJenisFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}