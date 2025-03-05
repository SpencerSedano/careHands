using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CareHands.Migrations
{
    /// <inheritdoc />
    public partial class FifthMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Elders_ElderFamilyMembers_FamilyMemberId",
                table: "Elders");

            migrationBuilder.DropForeignKey(
                name: "FK_Workers_Elders_ElderId",
                table: "Workers");

            migrationBuilder.AlterColumn<int>(
                name: "ElderId",
                table: "Workers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "FamilyMemberId",
                table: "Elders",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Elders_ElderFamilyMembers_FamilyMemberId",
                table: "Elders",
                column: "FamilyMemberId",
                principalTable: "ElderFamilyMembers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Workers_Elders_ElderId",
                table: "Workers",
                column: "ElderId",
                principalTable: "Elders",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Elders_ElderFamilyMembers_FamilyMemberId",
                table: "Elders");

            migrationBuilder.DropForeignKey(
                name: "FK_Workers_Elders_ElderId",
                table: "Workers");

            migrationBuilder.AlterColumn<int>(
                name: "ElderId",
                table: "Workers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FamilyMemberId",
                table: "Elders",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Elders_ElderFamilyMembers_FamilyMemberId",
                table: "Elders",
                column: "FamilyMemberId",
                principalTable: "ElderFamilyMembers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Workers_Elders_ElderId",
                table: "Workers",
                column: "ElderId",
                principalTable: "Elders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
