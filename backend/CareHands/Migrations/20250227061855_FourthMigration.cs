using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CareHands.Migrations
{
    /// <inheritdoc />
    public partial class FourthMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FamilyMemberEmail",
                table: "Elders");

            migrationBuilder.DropColumn(
                name: "FamilyMemberLastName",
                table: "Elders");

            migrationBuilder.DropColumn(
                name: "FamilyMemberName",
                table: "Elders");

            migrationBuilder.RenameColumn(
                name: "FamilyMemberPhoneNumber",
                table: "Elders",
                newName: "FamilyMemberId");

            migrationBuilder.AddColumn<int>(
                name: "ElderId",
                table: "Workers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "IdentityUserId",
                table: "Workers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ElderFamilyMembers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: true),
                    PhoneNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ElderFamilyMembers", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Workers_ElderId",
                table: "Workers",
                column: "ElderId");

            migrationBuilder.CreateIndex(
                name: "IX_Workers_IdentityUserId",
                table: "Workers",
                column: "IdentityUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Elders_FamilyMemberId",
                table: "Elders",
                column: "FamilyMemberId");

            migrationBuilder.AddForeignKey(
                name: "FK_Elders_ElderFamilyMembers_FamilyMemberId",
                table: "Elders",
                column: "FamilyMemberId",
                principalTable: "ElderFamilyMembers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Workers_AspNetUsers_IdentityUserId",
                table: "Workers",
                column: "IdentityUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Workers_Elders_ElderId",
                table: "Workers",
                column: "ElderId",
                principalTable: "Elders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Elders_ElderFamilyMembers_FamilyMemberId",
                table: "Elders");

            migrationBuilder.DropForeignKey(
                name: "FK_Workers_AspNetUsers_IdentityUserId",
                table: "Workers");

            migrationBuilder.DropForeignKey(
                name: "FK_Workers_Elders_ElderId",
                table: "Workers");

            migrationBuilder.DropTable(
                name: "ElderFamilyMembers");

            migrationBuilder.DropIndex(
                name: "IX_Workers_ElderId",
                table: "Workers");

            migrationBuilder.DropIndex(
                name: "IX_Workers_IdentityUserId",
                table: "Workers");

            migrationBuilder.DropIndex(
                name: "IX_Elders_FamilyMemberId",
                table: "Elders");

            migrationBuilder.DropColumn(
                name: "ElderId",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "IdentityUserId",
                table: "Workers");

            migrationBuilder.RenameColumn(
                name: "FamilyMemberId",
                table: "Elders",
                newName: "FamilyMemberPhoneNumber");

            migrationBuilder.AddColumn<string>(
                name: "FamilyMemberEmail",
                table: "Elders",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FamilyMemberLastName",
                table: "Elders",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FamilyMemberName",
                table: "Elders",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: true);
        }
    }
}
