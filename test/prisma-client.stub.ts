/**
 * Test-only stand-in for the generated Prisma client.
 *
 * The generated client uses `import.meta`, which ts-jest cannot compile into
 * CommonJS. Unit tests never talk to a real database, so the jest
 * `moduleNameMapper` swaps `generated/prisma/client` for this stub. Type
 * checking still uses the real generated types.
 */
export class PrismaClient {
  async $connect(): Promise<void> {}

  async $disconnect(): Promise<void> {}
}
